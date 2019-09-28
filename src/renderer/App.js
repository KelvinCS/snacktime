import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { hot } from 'react-hot-loader/root';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';

import theme from './theme';

type Props = {
  history: History,
};

const App = ({ history }: Props) => (
  <div className="App">
    <ThemeProvider theme={theme}>
      <ConnectedRouter history={history}>
        <Switch>
          <Redirect exact from="/" to="/home"></Redirect>
          <Route path="/home" component={Home} />
          <Route path="/player" component={Player}></Route>
        </Switch>
      </ConnectedRouter>
    </ThemeProvider>
  </div>
);

export default hot(App);
