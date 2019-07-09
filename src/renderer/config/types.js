/* eslint no-undef: ['off'] */

export type FilmSortOption = 'name' | 'rating' | 'released' | 'trending' | 'updated' | 'year';
export type FilmOrderOption = 1 | -1;
export type FilmGenre =
  | 'all'
  | 'action'
  | 'adventure'
  | 'animation'
  | 'comedy'
  | 'crime'
  | 'disaster'
  | 'documentary'
  | 'drama'
  | 'eastern'
  | 'family'
  | 'fan-film'
  | 'fantasy'
  | 'film-noir'
  | 'history'
  | 'holiday'
  | 'horror'
  | 'indie'
  | 'music'
  | 'mystery'
  | 'none'
  | 'road'
  | 'romance'
  | 'science-fiction'
  | 'short'
  | 'sports'
  | 'sporting-event'
  | 'suspense'
  | 'thriller'
  | 'tv-movie'
  | 'war'
  | 'western';

export type PopcorntimeStatus = {
  repo: string,
  server: string,
  status: string,
  totalAnimes: number,
  totalMovies: number,
  totalShows: number,
  updated: number,
  uptime: number,
  version: string,
  commit: string,
};

export type FilmRequestOptions = {
  sort: FilmSortOption,
  order: FilmOrderOption,
  genre: FilmGenre,
  keywords: string,
};

export type MovieInfo = {
  _id: string,
  imdb_id: string,
  title: string,
  year: number,
  slug: string,
  synopsis: string,
  runtime: number,
  rating: {
    percentage: number,
    watching: number,
    votes: number,
  },
  images: {
    banner: string,
    fanart: string,
    poster: string,
  },
  genres: FilmGenre[],
  type: string,
  language: string,
  released: number,
  trailer: string,
  certification: string,
  torrents: {
    en: {
      '1080p': {
        provider: string,
        filesize: string,
        size: number,
        peer: number,
        seed: number,
        url: string,
      },
      '720p': {
        provider: string,
        filesize: string,
        size: number,
        peer: number,
        seed: number,
        url: string,
      },
    },
  },
};

export type AnimeShowInfo = {
  _id: string,
  imdb_id: string,
  title: string,
  year: number,
  slug: string,
  synopsis: string,
  runtime: number,
  rating: {
    percentage: number,
    watching: number,
    votes: number,
  },
  images: {
    banner: string,
    fanart: string,
    poster: string,
  },
  genres: FilmGenre[],
  type: string,
  tvdb_id: string,
  country: string,
  network: string,
  air_day: string,
  air_time: string,
  status: string,
  num_seasons: number,
  last_updated: number,
  latest_episode: number,
  episodes: [
    {
      tvdb_id: number,
      season: number,
      episode: number,
      title: string,
      overview: string,
      date_based: boolean,
      first_aired: number,
      torrents: {
        '0': {
          provider: string,
          peers: number,
          seeds: number,
          url: string,
        },
        '480p': {
          provider: string,
          peers: number,
          seeds: number,
          url: string,
        },
        '720p': {
          provider: string,
          peers: number,
          seeds: number,
          url: string,
        },
        '1080p': {
          provider: string,
          peers: number,
          seeds: number,
          url: string,
        },
      },
    },
  ],
};

export type AnimeInfo = AnimeShowInfo & {
  _id: string,
  imdb_id: string,
  title: string,
  year: number,
  slug: string,
  synopsis: string,
  runtime: number,
  rating: {
    percentage: number,
    watching: number,
    votes: number,
  },
  images: {
    banner: string,
    fanart: string,
    poster: string,
  },
  genres: FilmGenre[],
  type: string,
  language: string,
  released: number,
  trailer: string,
  certification: string,
  torrents: {
    en: {
      '1080p': {
        provider: string,
        filesize: string,
        size: number,
        peer: number,
        seed: number,
        url: string,
      },
      '720p': {
        provider: string,
        filesize: string,
        size: number,
        peer: number,
        seed: number,
        url: string,
      },
    },
  },
};

export type ShowInfo = {
  _id: string,
  imdb_id: string,
  title: string,
  year: number,
  slug: string,
  synopsis: string,
  runtime: number,
  rating: {
    percentage: number,
    watching: number,
    votes: number,
  },
  images: {
    banner: string,
    fanart: string,
    poster: string,
  },
  genres: FilmGenre[],
  type: string,
  tvdb_id: string,
  country: string,
  network: string,
  air_day: string,
  air_time: string,
  status: string,
  num_seasons: number,
  last_updated: number,
  latest_episode: number,
  episodes: [
    {
      tvdb_id: number,
      season: number,
      episode: number,
      title: string,
      overview: string,
      date_based: boolean,
      first_aired: number,
      torrents: {
        '0': {
          provider: string,
          peers: number,
          seeds: number,
          url: string,
        },
        '480p': {
          provider: string,
          peers: number,
          seeds: number,
          url: string,
        },
        '720p': {
          provider: string,
          peers: number,
          seeds: number,
          url: string,
        },
        '1080p': {
          provider: string,
          peers: number,
          seeds: number,
          url: string,
        },
      },
    },
  ],
};
