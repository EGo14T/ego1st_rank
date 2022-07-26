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
import { app, BrowserWindow, Menu, Tray } from 'electron';
import { listenIpc } from './ipc';
import { resolveHtmlPath } from './utils';
import { hasClientProcess, startClientExe } from './utils/clientStart';
import { appConfig } from './utils/config';
import Store from 'electron-store';

Store.initRenderer();

let mainWindow: BrowserWindow | null = null;
let tray: Tray;

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

  mainWindow = new BrowserWindow({
    show: true,
    width: 370,
    height: 500,
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
  tray.on('click', () => {
    mainWindow?.show();
  });

  const contextMenu = Menu.buildFromTemplate([
    {
      label: `显示主页`,
      click() {
        mainWindow?.show();
      },
    },
    {
      label: `退出软件`,
      click() {
        app.quit();
      },
    },
  ]);
  tray.setContextMenu(contextMenu);
};

app.on('window-all-closed', () => {
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
      if (mainWindow === null) createWindow();
    });
  })
  .then(() => {
    createTray();
  })
  .catch(console.log);
