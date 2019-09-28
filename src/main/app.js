/* eslint-disable no-console */
import { BrowserWindow } from 'electron';
import {
  cond, pathEq, T, partial,
} from 'ramda';
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

const actionRunMedia = ({ payload }) => runMedia(payload.url);

const actionOfType = pathEq('type');

const handleAction = cond([
  [actionOfType('RUN_MEDIA'), actionRunMedia],
  [T, partial(console.log, ['Ação não encontrada'])],
]);

function startBackend(mainWindow: BrowserWindow) {
  rendererBridge = new RendererBridge(mainWindow);

  rendererBridge.reduxEvent.subscribe(handleAction);
}

export { startBackend };
