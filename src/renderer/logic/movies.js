/* eslint-disable no-console */
import { kea } from 'kea';
import PropTypes from 'prop-types';
import { put } from 'redux-saga/effects';
import { popcorntime } from '../services/api';

const { getPage } = popcorntime.movie;

const moviesLogic = kea({
  actions: () => ({
    fetchMovies: (page: number, options?) => ({ page, options }),
    setMovies: movies => ({ movies }),
    runMovie: url => ({ url }),
  }),

  reducers: ({ actions }) => ({
    currentPage: [
      null,
      PropTypes.number,
      {
        [actions.fetchMovies]: (_, payload) => payload.page,
      },
    ],

    movies: [
      [],
      PropTypes.array,
      {
        [actions.setMovies]: (_, payload) => payload.movies,
      },
    ],

    isFetching: [
      false,
      PropTypes.bool,
      {
        [actions.fetchMovies]: () => true,
        [actions.setMovies]: () => false,
      },
    ],

    movieRunning: [
      false,
      PropTypes.bool,
      {
        MOVIE_RUNNING: () => true,
      },
    ],
  }),

  takeLatest: ({ actions, workers }) => ({
    [actions.fetchMovies]: workers.fetchMovies,
    [actions.runMovie]: workers.runMovie,
  }),

  workers: {
    * fetchMovies(action) {
      const { page, options } = action.payload;
      const { setMovies } = this.actions;

      const response = yield getPage(page, options);

      if (response.ok) {
        yield put(setMovies(response.data));
      }
    },

    * runMovie(action) {
      console.log('filme');
      yield put({ ...action, type: 'RUN_MOVIE', meta: { toMain: true } });
    },
  },
});

export default moviesLogic;
