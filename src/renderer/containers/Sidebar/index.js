import React from 'react';
import { Route, Link } from 'react-router-dom';
import { MOVIE_ICON, TV_ICON, ANIMATION_ICON } from '../../theme/images';
import { Container, MenuItem, Header } from './atoms';

type CustomLinkProps = {
  to: String,

  icon: String,
  label: string,
};

const CustomLink = ({ to, icon, label }: CustomLinkProps) => (
  <Route path={to} exact>
    {({ match }) => (
      <Link to={to}>
        <MenuItem selected={match}>
          {icon && <img src={icon}></img>}
          <span>{label}</span>
        </MenuItem>
      </Link>
    )}
  </Route>
);

const Sidebar = () => (
  <Container>
    {/* <MenuItem to="/">
      <img src={MOVIE_ICON}></img>
      <span>Filmes</span>
    </MenuItem>
    <MenuItem to="/shows">
      <img src={TV_ICON}></img>
      <span>Séries</span>
    </MenuItem>
    <MenuItem selected>
      <img src={ANIMATION_ICON}></img>
      <span>Animes</span>
    </MenuItem> */}

    <CustomLink label="Filmes" to="/home/movies" icon={MOVIE_ICON}></CustomLink>
    <CustomLink label="Séries" to="/home/shows" icon={TV_ICON}></CustomLink>
    <CustomLink label="Animes" to="/home/animes" icon={ANIMATION_ICON}></CustomLink>

    <Header>
      <span>Gêneros</span>
    </Header>

    {/* <MenuItem selected>
      <span>Animação</span>
    </MenuItem>
    <MenuItem>
      <span>Aventura</span>
    </MenuItem>
    <MenuItem>
      <span>Romance</span>
    </MenuItem> */}
  </Container>
);

export default Sidebar;
