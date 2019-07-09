import { create } from 'apisauce';
import {
  MovieInfo,
  FilmRequestOptions,
  AnimeInfo,
  ShowInfo,
  PopcorntimeStatus,
} from '../../config/types';

const api = create({
  baseURL: 'https://tv-v2.api-fetch.website',
  headers: { Accept: 'application/json; charset=utf-8' },
});

const movie = {
  getPages(): Promise<{ data: string[] }> {
    return api.get('/movies');
  },

  getPage(page: number, options: FilmRequestOptions = {}): Promise<{ data: MovieInfo[] }> {
    return api.get(`/movies/${page}`, { ...options });
  },

  getDetails(imdbId: string): Promise<{ data: MovieInfo }> {
    return api.get(`/movie/${imdbId}`);
  },

  getRandom(): Promise<{ data: MovieInfo }> {
    return api.get('/random/movie');
  },
};

const anime = {
  getPages(): Promise<{ data: string[] }> {
    return api.get('/animes');
  },

  getPage(page: number, options: FilmRequestOptions = {}): Promise<{ data: AnimeInfo[] }> {
    return api.get(`/animes/${page}`, { ...options });
  },

  getDetails(imdbId: string): Promise<{ data: AnimeInfo }> {
    return api.get(`/animes/${imdbId}`);
  },

  getRandom(): Promise<{ data: AnimeInfo }> {
    return api.get('/random/anime');
  },
};

const show = {
  getPages(): Promise<{ data: string[] }> {
    return api.get('/shows');
  },

  getPage(page: number, options: FilmRequestOptions = {}): Promise<{ data: ShowInfo[] }> {
    return api.get(`/shows/${page}`, { ...options });
  },

  getDetails(imdbId: string): Promise<{ data: ShowInfo }> {
    return api.get(`/shows/${imdbId}`);
  },

  getRandom(): Promise<{ data: ShowInfo }> {
    return api.get('/random/show');
  },
};

movie.getPage('d', { genre: 'road' });

const system = {
  getStatus(): Promise<{ data: PopcorntimeStatus }> {
    return api.get('/status');
  },
};

export {
  movie, anime, show, system,
};
