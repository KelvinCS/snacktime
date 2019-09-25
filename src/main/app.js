/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import { BrowserWindow } from 'electron';
import StreamServer from './services/StreamServer';
import TorrentManager from './services/TorrentManager';
import RendererBridge from './services/RendererBridge';

import { isVideoFile } from './lib';

const torrentManager = new TorrentManager();
const streamServer = new StreamServer();

let rendererBridge: RendererBridge;

async function runMedia(magnetURL) {
  const movieTorrent = await torrentManager.addAsync(magnetURL);
  const movie = movieTorrent.files.find(isVideoFile);

  streamServer.beginStreaming(movie);

  rendererBridge.dispatch({ type: 'MEDIA_READY' });
}

const actionHandlers = {
  RUN_MEDIA: ({ url }) => runMedia(url),
  DEFAULT: () => console.log('Ação não encontrada'),
};

function getActionHandler(action) {
  const handler = actionHandlers[action.type];

  if (!handler) {
    return actionHandlers.DEFAULT;
  }

  return handler;
}

function startBackend(mainWindow: BrowserWindow) {
  rendererBridge = new RendererBridge(mainWindow);

  rendererBridge.reduxEvent.subscribe((action) => {
    const actionHandler = getActionHandler(action);

    actionHandler(action.payload);
  });
}

export { startBackend };
