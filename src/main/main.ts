/* eslint global-require: off, no-console: off, promise/always-return: off */

/**
 * This module executes inside of electron's main process. You can start
 * electron renderer process from here and communicate with the other processes
 * through IPC.
 *
 * When running `npm run build` or `npm run build:main`, this file is compiled to
 * `./src/main.js` using webpack. This gives us some performance wins.
 */
import path from 'path';
import { app, BrowserWindow, Tray } from 'electron';
import { authenticate, Credentials } from 'league-connect';
import { listenIpc } from './ipc';
import { wsListen } from './utils/ws';
import { hasClientProcess, startClientExe } from './utils/clientStart';
import { appConfig } from './utils/config';
import { resolveHtmlPath } from './utils';

import Store from 'electron-store';

Store.initRenderer();

let mainWindow: BrowserWindow | null = null;
let tray: Tray;

let credentials: Credentials;

if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}

const isDebug =
  process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true';

if (isDebug) {
  require('electron-debug')();
}

const getAssetPath = (...paths: string[]): string => {
  const RESOURCES_PATH = app.isPackaged
    ? path.join(process.resourcesPath, 'assets')
    : path.join(__dirname, '../../assets');
  return path.join(RESOURCES_PATH, ...paths);
};

const createWindow = async () => {
  // 如果没有启动客户端则启动
  if (!(await hasClientProcess())) {
    const clientPath = appConfig.get('gameDirectory');
    // 启动客户端
    startClientExe(clientPath);
  }

  // 30s后获取令牌  ws监听
  setTimeout(async () => {
    credentials = await authenticate({
      awaitConnection: true,
    });

    appConfig.set('credentials', credentials);
    wsListen(credentials);
  }, 1000);
  mainWindow = new BrowserWindow({
    show: true,
    width: 370,
    height: 650,
    icon: getAssetPath('icon.png'),
    frame: false,
    resizable: false,
    transparent: true,
    webPreferences: {
      nodeIntegration: false,
      preload: app.isPackaged
        ? path.join(__dirname, 'preload.js')
        : path.join(__dirname, '../../.erb/dll/preload.js'),
    },
  });

  app.commandLine.appendSwitch('wm-window-animations-disabled');

  mainWindow.loadURL(resolveHtmlPath('index.html'));

  mainWindow.on('ready-to-show', () => {
    if (!mainWindow) {
      throw new Error('"mainWindow" is not defined');
    }
    if (process.env.START_MINIMIZED) {
      mainWindow.minimize();
    } else {
      mainWindow.show();
    }
  });

  listenIpc(mainWindow);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
};

const createTray = () => {
  const icon = getAssetPath('trayIcon.png');
  tray = new Tray(icon);
};

app.on('window-all-closed', () => {
  // Respect the OSX convention of having the application in memory even
  // after all windows have been closed
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.disableHardwareAcceleration();

app
  .whenReady()
  .then(() => {
    createWindow();
    app.on('activate', () => {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (mainWindow === null) createWindow();
    });
  })
  .then(() => {
    createTray();
    tray.on('click', () => {
      mainWindow?.show();
    });
  })
  .catch(console.log);
