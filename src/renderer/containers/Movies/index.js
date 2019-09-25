import React, { Component } from 'react';
import Grid from '../../components/Grid';
import MovieCard from '../../components/MovieCard';
import { MovieInfo } from '../../config/types';
import moviesLogic from '../../logic/movies';

type Props = {
  movies: MovieInfo[],
  isFetching: Boolean,
  run: () => void,
};

class Movies extends Component<Props> {
  componentDidMount() {
    const { fetchMovies } = this.actions;
    // eslint-disable-next-line no-console
    console.log('opa');
    fetchMovies(1);
  }

  render() {
    const { movies, run } = this.props;

    return (
      <Grid>
        {movies.map(movie => (
          <Grid.Item key={movie.imdb_id}>
            <MovieCard
              cover={movie.images.banner}
              title={movie.title}
              year={movie.year}
              onClick={() => run(movie.torrents.en['720p'].url)}
            />
          </Grid.Item>
        ))}
      </Grid>
    );
  }
}

export default moviesLogic(Movies);
