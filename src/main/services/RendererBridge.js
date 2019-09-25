import { ipcMain, BrowserWindow } from 'electron';
import EventEmitter from '../lib/EventEmitter';

class RendererBridge {
  constructor(mainWindow: BrowserWindow) {
    this.window = mainWindow;

    this.reduxEvent = new EventEmitter();
    ipcMain.on('redux-event', (_, action) => this.reduxEvent.emit(action));
  }

  dispatch(action) {
    this.window.webContents.send('redux-event', action);
  }
}

export default RendererBridge;
