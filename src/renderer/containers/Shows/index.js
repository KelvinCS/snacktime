import React, { Component } from 'react';
import Grid from '../../components/Grid';
import MovieCard from '../../components/MovieCard';
import { Show } from '../../config/types';
import showsLogic from '../../logic/shows';

type Props = {
  shows: Show[],
  isFetching: Boolean,
  run: () => void,
};

class Shows extends Component<Props> {
  componentDidMount() {
    const { fetchShows } = this.actions;

    fetchShows(1);
  }

  render() {
    const { shows, run } = this.props;

    return (
      <Grid>
        {shows.map(show => (
          <Grid.Item key={show.imdb_id}>
            <MovieCard
              cover={show.images.banner}
              title={show.title}
              year={show.year}
              onClick={() => run('')}
            />
          </Grid.Item>
        ))}
      </Grid>
    );
  }
}

export default showsLogic(Shows);
