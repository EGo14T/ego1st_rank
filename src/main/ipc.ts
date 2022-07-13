import { ipcMain } from "electron";
import { appConfig } from "./utils/config";
import { acceptGame } from "./utils/lcuApi";

export const listenIpc = () => {
  ipcMain.on('ipc-ttt', async (_, arg) => {
    acceptGame(appConfig.get('credentials'));
  });
}
