/* eslint-disable no-console */
import { kea } from 'kea';
import PropTypes from 'prop-types';
import { put } from 'redux-saga/effects';
import { popcorntime } from '../services/api';

const { getPage } = popcorntime.show;

const showsLogic = kea({
  actions: () => ({
    fetchShows: (page: number, options?) => ({ page, options }),
    setShows: shows => ({ shows }),
  }),

  reducers: ({ actions }) => ({
    currentPage: [
      null,
      PropTypes.number,
      {
        [actions.fetchShows]: (_, payload) => payload.page,
      },
    ],

    shows: [
      [],
      PropTypes.array,
      {
        [actions.setShows]: (_, payload) => payload.shows,
      },
    ],

    isFetching: [
      false,
      PropTypes.bool,
      {
        [actions.fetchShows]: () => true,
        [actions.setShows]: () => false,
      },
    ],
  }),

  takeLatest: ({ actions, workers }) => ({
    [actions.fetchShows]: workers.fetchShows,
  }),

  workers: {
    * fetchShows(action) {
      const { page, options } = action.payload;
      const { setShows } = this.actions;

      const response = yield getPage(page, options);

      if (response.ok) {
        yield put(setShows(response.data));
      }
    },
  },
});

export default showsLogic;
