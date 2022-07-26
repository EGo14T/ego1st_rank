import { ipcMain, BrowserWindow, IpcMainEvent } from 'electron';
import { appConfig } from './utils/config';
import { dealSummonerInfo } from './utils/lcuApi';
import { authenticate, Credentials } from 'league-connect';
import { wsListen } from './utils/ws';

let credentials: Credentials;

export const listenIpc = (appWindow: BrowserWindow) => {
  // 最小化窗口
  ipcMain.on('mainwin-minimize', async () => {
    appWindow.minimize();
  });

  // 关闭窗口至托盘
  ipcMain.on('mainwin-hide', async () => {
    appWindow.hide();
  });

  ipcMain.on('set-app-store', async (_, ...args: any[]) => {
    const data = args[0];
    const [dataName, dataValue] = data;
    appConfig.set(dataName, dataValue);
  });

  ipcMain.on('init-user-data', async (event: IpcMainEvent) => {
    const credentials: Credentials = appConfig.get('credentials');
    const userData = await dealSummonerInfo(credentials);
    event.reply('init-user-data', userData);
  });

  ipcMain.on('get-setting', async (event: IpcMainEvent) => {
    const acceptGame = appConfig.get('acceptGame');
    const gameDirectory = appConfig.get('gameDirectory');

    const data = {
      acceptGame,
      gameDirectory,
    };
    event.reply('get-setting', data);
  });

  ipcMain.on('init', async (event: IpcMainEvent) => {
    // 获取令牌  ws监听
    setTimeout(async () => {
      credentials = await authenticate({
        awaitConnection: true,
      });
      appConfig.set('credentials', credentials);
      setTimeout(async () => {
        wsListen(credentials);
        event.reply('init-finished');
      }, 3000);
    }, 1000);
  });
};
