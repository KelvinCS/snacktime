import React from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { hot } from 'react-hot-loader/root';
import { ThemeProvider } from 'styled-components';
import Home from './containers/Home';
import theme from './theme';

type Props = {
  history: History,
};

const App = ({ history }: Props) => (
  <div className="App">
    <ThemeProvider theme={theme}>
      <ConnectedRouter history={history}>
        <Route exact path="/" component={Home} />
      </ConnectedRouter>
    </ThemeProvider>
  </div>
);

// class App extends Component<Props> {
//   render() {
//     const { history } = this.props;

//     return (
//       <div className="App">
//         <ThemeProvider theme={theme}>
//         <ConnectedRouter history={history}>
//           <Route exact path="/" component={Home} />
//         </ConnectedRouter>
//         </ThemeProvider>
//       </div>
//     );
//   }
// }

export default hot(App);
