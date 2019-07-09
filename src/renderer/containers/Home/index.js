import React, { Component } from 'react';
import styled from 'styled-components';
import moviesLogic from '../../logic/movies';
import Grid from '../../components/Grid';
import { MovieInfo } from '../../config/types';
import MovieCard from '../../components/MovieCard';

const Container = styled.div`
  width: 100vw;
  background-color: white;
`;

type Props = {
  movies: MovieInfo[],
  isFetching: Boolean,
  movieRunning: Boolean,
};

class Home extends Component<Props> {
  componentDidMount() {
    const { fetchMovies } = this.actions;

    fetchMovies(1);
  }

  render() {
    const { movies, movieRunning } = this.props;
    const { runMovie } = this.actions;

    return (
      <Container>
        <h1>{JSON.stringify(movieRunning)}</h1>
        <Grid>
          {movies.map(movie => (
            <Grid.Item key={movie.imdb_id}>
              <MovieCard
                cover={movie.images.banner}
                title={movie.title}
                year={movie.year}
                onClick={() => runMovie(movie.torrents.en['720p'].url)}
              />
            </Grid.Item>
          ))}
        </Grid>
      </Container>
    );
  }
}

export default moviesLogic(Home);
