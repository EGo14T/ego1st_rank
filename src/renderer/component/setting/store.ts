import { action, makeObservable, observable, runInAction } from 'mobx';

export class SettingStore {
  constructor() {
    makeObservable(this);
  }

  @observable acceptGame: boolean = true;
  @observable gameDirectory: string = '';

  @action
  initSetting = () => {
    window.electron.ipcRenderer.once('get-setting', (arg: any) => {
      const { acceptGame, gameDirectory } = arg;
      runInAction(() => {
        this.acceptGame = acceptGame;
        this.gameDirectory = gameDirectory;
      });
    });
  };

  @action
  setAcceptGame = (checked: boolean) => {
    window.electron.ipcRenderer.sendMessage(
      'set-app-store',
      'acceptGame',
      checked
    );
    runInAction(() => {
      this.acceptGame = checked;
    });
  };
}

const instance = new SettingStore();
export default instance;
