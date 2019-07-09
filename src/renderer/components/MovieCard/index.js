/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React from 'react';
import Palette from 'react-palette';
import hexToRgba from 'hex-to-rgba';
import { StyledComponent } from 'styled-components';
import {
  Container, Title, Year, Banner,
} from './atoms';

type Props = {
  cover: string,
  year: string,
  title: string,
  onClick?: () => void,
};

const getCustomBoxShadow = (hexColor) => {
  console.log(hexColor);

  return `0 10px 25px ${hexToRgba(hexColor || '#000', 0.3)}`;
};

const MovieCard = ({
  cover, year, title, onClick,
}: Props) => (
  <Container onClick={onClick}>
    {/* <Palette image={cover}>{palette => <img src={cover} />}</Palette> */}
    <Banner src={cover} />
    <Title>{title}</Title>
    <Year>{year}</Year>
  </Container>
);

export default MovieCard;
