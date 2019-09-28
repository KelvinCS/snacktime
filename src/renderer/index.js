import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store, { history } from './store';
import App from './App';

import './theme/css/normalize.css';
import './theme/css/nativize.css';
import './theme/css/global.css';

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('app'),
);
