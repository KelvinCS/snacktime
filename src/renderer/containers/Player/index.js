import React from 'react';
import styled from 'styled-components';
// import 'video-react/dist/video-react.css';
// import { Player as VideoPlayer } from 'video-react';

import Plyr from 'plyr';
import 'plyr/dist/plyr.css';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #000;
`;

const Video = styled.video`
  height: 100vh !important;
`;

class Player extends React.Component {
  componentDidMount() {
    this.player = new Plyr('#player');
  }

  render() {
    return (
      <Container>
        <Video id="player" playsinline controls autoPlay>
          <source src="http://localhost:3000" type="video/mp4" />
        </Video>
      </Container>
    );
  }
}

export default Player;
