import { kea } from 'kea';
import PropTypes from 'prop-types';
import { put } from 'redux-saga/effects';
import { popcorntime } from '../../../services/api';

const { getPage } = popcorntime.anime;

const animesLogic = kea({
  actions: () => ({
    fetchAnimes: (page: number, options?) => ({ page, options }),
    setAnimes: animes => ({ animes }),
  }),

  reducers: ({ actions }) => ({
    currentPage: [
      null,
      PropTypes.number,
      {
        [actions.fetchAnimes]: (_, payload) => payload.page,
      },
    ],

    animes: [
      [],
      PropTypes.array,
      {
        [actions.setAnimes]: (_, payload) => payload.animes,
      },
    ],

    isFetching: [
      false,
      PropTypes.bool,
      {
        [actions.fetchAnimes]: () => true,
        [actions.setAnimes]: () => false,
      },
    ],
  }),

  takeLatest: ({ actions, workers }) => ({
    [actions.fetchAnimes]: workers.fetchAnimes,
  }),

  workers: {
    * fetchAnimes(action) {
      const { page, options } = action.payload;
      const { setAnimes } = this.actions;

      const response = yield getPage(page, options);

      if (response.ok) {
        yield put(setAnimes(response.data));
      }
    },
  },
});

export default animesLogic;
