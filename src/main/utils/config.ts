import Store from 'electron-store';

export const appConfig = new Store({
  defaults: {
    gameDirectory: 'F:\\WeGameApps\\LOL\\TCLS\\Client.exe',
    acceptGame: true,
  },
});
