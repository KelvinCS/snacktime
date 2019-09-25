import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store, { history } from './store';
import App from './App';

import './theme/css/normalize.css';
import './theme/css/nativize.css';
import './theme/css/global.css';

// import styled from 'styled-components';

// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('app'),
);
// registerServiceWorker();
