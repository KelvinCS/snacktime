import { kea } from 'kea';
import PropTypes from 'prop-types';
import { put } from 'redux-saga/effects';
import { popcorntime } from '../../../services/api';

const { getPage } = popcorntime.serie;

const seriesLogic = kea({
  actions: () => ({
    fetchSeries: (page: number, options?) => ({ page, options }),
    setSeries: series => ({ series }),
  }),

  reducers: ({ actions }) => ({
    currentPage: [
      null,
      PropTypes.number,
      {
        [actions.fetchSeries]: (_, payload) => payload.page,
      },
    ],

    series: [
      [],
      PropTypes.array,
      {
        [actions.setSeries]: (_, payload) => payload.series,
      },
    ],

    isFetching: [
      false,
      PropTypes.bool,
      {
        [actions.fetchSeries]: () => true,
        [actions.setSeries]: () => false,
      },
    ],
  }),

  takeLatest: ({ actions, workers }) => ({
    [actions.fetchSeries]: workers.fetchSeries,
  }),

  workers: {
    * fetchSeries(action) {
      const { page, options } = action.payload;
      const { setSeries } = this.actions;

      const response = yield getPage(page, options);

      if (response.ok) {
        yield put(setSeries(response.data));
      }
    },
  },
});

export default seriesLogic;
