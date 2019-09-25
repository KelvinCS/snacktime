import React from 'react';
import { Container, TransparentBar } from './atoms';

type Props = {
  children: React.Component,
};

const Topbar = ({ children }: Props) => (
  <Container>
    <TransparentBar>{children}</TransparentBar>
  </Container>
);

export default Topbar;
