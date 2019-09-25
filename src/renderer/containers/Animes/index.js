import React, { Component } from 'react';
import Grid from '../../components/Grid';
import MovieCard from '../../components/MovieCard';
import { Anime } from '../../config/types';
import animesLogic from '../../logic/animes';

type Props = {
  animes: Anime[],
  isFetching: Boolean,
  run: () => void,
};

class Animes extends Component<Props> {
  componentDidMount() {
    const { fetchAnimes } = this.actions;

    fetchAnimes(1);
  }

  render() {
    const { animes, run } = this.props;

    return (
      <Grid>
        {animes.map(anime => (
          <Grid.Item key={anime.imdb_id}>
            <MovieCard
              cover={anime.images.banner}
              title={anime.title}
              year={anime.year}
              onClick={() => run('')}
            />
          </Grid.Item>
        ))}
      </Grid>
    );
  }
}

export default animesLogic(Animes);
