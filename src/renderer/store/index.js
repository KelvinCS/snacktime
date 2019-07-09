import { ipcRenderer } from 'electron';
import { compose, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { getStore } from 'kea';
import sagaPlugin from 'kea-saga';

export const history = createBrowserHistory();

const ipcBridge = () => next => async (action) => {
  if (action.meta && action.meta.toMain) {
    ipcRenderer.send('redux-event', action);
  }

  return next(action);
};

/**
 * Listen to the main process and dispatch events as actions
 * @param store Redux Store
 */
const startMainProcessBridging = (store: Store) => {
  ipcRenderer.on('redux-event', (_, action) => store.dispatch(action));
};

const configureStore = (preloadedState): Store => getStore({
  plugins: [sagaPlugin],
  paths: ['kea', 'scenes'],
  reducers: { router: connectRouter(history) },
  preloadedState,
  middleware: [ipcBridge],
  compose: composeWithDevTools || compose,
  enhancers: [],
});

const store = configureStore();

startMainProcessBridging(store);

export default store;
