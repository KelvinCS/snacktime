import React from 'react';
import Grid from '../../components/Grid';
import MovieCard from '../../components/MovieCard';
import { MovieInfo, ShowInfo, AnimeInfo } from '../../config/types';

type Props = {
  content: (MovieInfo | ShowInfo | AnimeInfo)[],
  run: () => void,
};

const ContentList = ({ content, run }: Props) => (
  <Grid>
    {content.map(item => (
      <Grid.Item key={item.imdb_id}>
        <MovieCard
          cover={item.images.banner}
          title={item.title}
          year={item.year}
          onClick={() => run(item)}
        />
      </Grid.Item>
    ))}
  </Grid>
);

export default ContentList;
