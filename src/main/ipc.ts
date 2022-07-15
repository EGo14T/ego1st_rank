import { ipcMain, BrowserWindow } from 'electron';

export const listenIpc = (appWindow: BrowserWindow) => {
  ipcMain.on('mainwin-minimize', async () => {
    appWindow.minimize();
  });

  ipcMain.on('mainwin-hide', async () => {
    appWindow.hide();
  });
};
