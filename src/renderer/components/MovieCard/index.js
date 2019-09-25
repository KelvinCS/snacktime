import React from 'react';
import ImagePalette from '../ImagePalette';

import {
  Container, Title, Year, Banner,
} from './atoms';

type Props = {
  cover: string,
  year: string,
  title: string,
  onClick?: () => void,
};

// const getBoxShadow = (r, g, b) => `0 10px 25px rgba(${r}, ${g}, ${b}, 0.3)`;

function getPaletteBoxShadow(palette) {
  if (palette.Vibrant) {
    // const { r, g, b } = palette.Vibrant;
    // return getBoxShadow(r, g, b);
  }
  // return getBoxShadow(0, 0, 0);
}

const MovieCard = ({
  onClick, cover, title, year,
}: Props) => (
  <Container onClick={onClick}>
    <ImagePalette src={cover}>
      {({ palette }) => <Banner src={cover} style={{ boxShadow: getPaletteBoxShadow(palette) }} />}
    </ImagePalette>

    <Title>{title}</Title>
    <Year>{year}</Year>
  </Container>
);

export default MovieCard;
