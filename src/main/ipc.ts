import { ipcMain, app, BrowserWindow } from 'electron';

export const listenIpc = (mainWindow: BrowserWindow) => {
  ipcMain.on('mainwin-minimize', async () => {
    mainWindow.minimize();
  });
};
