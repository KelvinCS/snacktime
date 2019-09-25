/* eslint-disable no-console */
import { kea } from 'kea';
import PropTypes from 'prop-types';
import { put } from 'redux-saga/effects';
import { push } from 'connected-react-router';

const playerLogic = kea({
  actions: () => ({
    runMedia: url => ({ url }),
  }),

  reducers: ({ actions }) => ({
    playerStarted: [
      false,
      PropTypes.bool,
      {
        [actions.runMedia]: () => true,
      },
    ],

    mediaReady: [
      false,
      PropTypes.bool,
      {
        MEDIA_READY: () => true,
      },
    ],
  }),

  takeLatest: ({ actions, workers }) => ({
    [actions.runMedia]: workers.runMedia,
    MEDIA_READY: workers.openPlayer,
  }),

  workers: {
    * runMedia(action) {
      yield put({ ...action, type: 'RUN_MEDIA', meta: { toMain: true } });
    },

    * openPlayer() {
      yield put(push('/player'));
    },
  },
});

export default playerLogic;
