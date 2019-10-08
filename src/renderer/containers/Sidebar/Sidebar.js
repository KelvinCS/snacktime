import React, { Component } from 'react';
import { Container } from './Sidebar.atoms';

type Props = {};

class Sidebar extends Component<Props> {
  render() {
    return (
      <Container>
        <h1>Opa, Cabron!</h1>
      </Container>
    );
  }
}

export default Sidebar;
