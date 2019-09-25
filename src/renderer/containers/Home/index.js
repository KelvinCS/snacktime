import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import playerLogic from '../../logic/player';
import Movies from '../Movies';
import Shows from '../Shows';
import Animes from '../Animes';
import Sidebar from '../Sidebar';
import { Container, Scrollable, Content } from './atoms';
import FloatingTopbar from '../../components/FloatingTopbar';
import RoundInput from '../../components/RoundInput';
import { SEARCH_ICON } from '../../theme/images';

type Props = {};

class Home extends Component<Props> {
  render() {
    const { runMedia } = this.actions;

    return (
      <Container>
        <Sidebar></Sidebar>
        <Content>
          <FloatingTopbar>
            <RoundInput icon={SEARCH_ICON} placeholder="Pesquisar"></RoundInput>
          </FloatingTopbar>
          <Scrollable>
            <Route
              exact
              path="/movies"
              component={() => <Movies run={url => runMedia(url)}></Movies>}
            ></Route>
            <Route
              path="/home/shows"
              component={() => <Shows run={url => runMedia(url)}></Shows>}
            ></Route>
            <Route
              path="/home/animes"
              component={() => <Animes run={url => runMedia(url)}></Animes>}
            ></Route>
          </Scrollable>
        </Content>
      </Container>
    );
  }
}

export default playerLogic(Home);
