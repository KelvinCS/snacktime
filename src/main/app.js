/* eslint-disable import/prefer-default-export */

import { ipcMain } from 'electron';
import StreamServer from './services/StreamServer';
import TorrentManager from './services/TorrentManager';

import { isVideoFile } from './lib';

const torrentManager = new TorrentManager();
const streamServer = new StreamServer();

async function runMovie({ url }) {
  console.log('getting torrent info');
  const movieTorrent = await torrentManager.addAsync(url);
  const movie = movieTorrent.files.find(isVideoFile);
  console.log('movie ready');
  streamServer.beginStreaming(movie);
}

const actionHandlers = {
  RUN_MOVIE: runMovie,
  DEFAULT: () => console.log('Ação não encontrada'),
};

function getActionHandler(action) {
  const handler = actionHandlers[action.type];

  if (!handler) {
    console.log(action);
    return actionHandlers.DEFAULT;
  }

  return handler;
}

function startBackend() {
  ipcMain.on('redux-event', (_, action) => {
    const actionHandler = getActionHandler(action);

    actionHandler(action.payload);
  });
}

export { startBackend };
