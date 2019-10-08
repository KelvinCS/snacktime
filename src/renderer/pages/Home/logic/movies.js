import { kea } from 'kea';
import PropTypes from 'prop-types';
import { put } from 'redux-saga/effects';
import { popcorntime } from '../../../services/api';

const { getPage } = popcorntime.movie;

const moviesLogic = kea({
  actions: () => ({
    fetchMovies: (page: number, options?) => ({ page, options }),
    setMovies: movies => ({ movies }),
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
  }),

  takeLatest: ({ actions, workers }) => ({
    [actions.fetchMovies]: workers.fetchMovies,
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
  },
});

export default moviesLogic;
