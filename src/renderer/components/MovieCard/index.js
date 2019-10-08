import React from 'react';
import {
  cond, complement, isEmpty, partial,
} from 'ramda';
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

const getBoxShadow = (r, g, b) => `0 10px 25px rgba(${r}, ${g}, ${b}, 0.3)`;

function getPaletteBoxShadow(palette) {
  const bindRGB = fn => ({ r, g, b }) => fn(r, g, b);

  return cond([
    [complement(isEmpty), bindRGB(getBoxShadow)],
    [isEmpty, partial(getBoxShadow, [0, 0, 0])],
  ])(palette.Vibrant);
}

type BannerProps = {
  cover: string,
  palette: any,
};
const BannerWithShadow = ({ cover, palette }: BannerProps) => (
  <Banner src={cover} style={{ boxShadow: getPaletteBoxShadow(palette) }} />
);

const MovieCard = ({
  onClick, cover, title, year,
}: Props) => (
  <Container onClick={onClick}>
    <ImagePalette src={cover}>
      <BannerWithShadow cover={cover}></BannerWithShadow>
    </ImagePalette>
    <Title>{title}</Title>
    <Year>{year}</Year>
  </Container>
);

export default MovieCard;
