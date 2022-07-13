import { ipcMain } from "electron";


export const listenIpc = () => {
  ipcMain.on('ipc-ttt', async (_, arg) => {
    console.log(arg);
  });
}
