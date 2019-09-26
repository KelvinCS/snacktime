/* eslint-disable no-console */
import { ipcRenderer } from 'electron';
import { compose, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { getStore } from 'kea';
import sagaPlugin from 'kea-saga';
import { when, pathEq } from 'ramda';

export const history = createBrowserHistory();

const sendToMain = action => ipcRenderer.send('redux-event', action);

const ipcBridge = () => next => async (action) => {
  when(pathEq(['meta', 'toMain'], true), sendToMain)(action);

  return next(action);
};

/**
 * Listen to the main process and dispatch events as actions
 * @param store Redux Store
 */
const startMainProcessBridging = (store: Store) => {
  ipcRenderer.on('redux-event', (_, action) => {
    store.dispatch(action);
  });
};

const configureStore = (preloadedState): Store => getStore({
  plugins: [sagaPlugin],
  paths: ['kea', 'scenes'],
  reducers: { router: connectRouter(history) },
  preloadedState,
  middleware: [routerMiddleware(history), ipcBridge],
  compose: composeWithDevTools || compose,
  enhancers: [],
});

const store = configureStore();

startMainProcessBridging(store);

export default store;
