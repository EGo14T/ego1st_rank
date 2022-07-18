import { ipcMain, BrowserWindow } from 'electron';

export const listenIpc = (appWindow: BrowserWindow) => {
  // 最小化窗口
  ipcMain.on('mainwin-minimize', async () => {
    appWindow.minimize();
  });

  // 关闭窗口至托盘
  ipcMain.on('mainwin-hide', async () => {
    appWindow.hide();
  });
};
