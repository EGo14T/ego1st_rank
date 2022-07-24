import { action, makeObservable, observable, runInAction } from 'mobx';

export class UserInfoStore {
  constructor() {
    makeObservable(this);
  }

  @observable careerData: any = {};
  @observable userData: any = {};
  @observable championData: any[] = [];
  @observable loading: boolean = true;

  @action
  initData = () => {
    window.electron.ipcRenderer.once('init-user-data', (arg: any) => {
      const {
        displayName,
        summonerLevel,
        profileIconId,
        championData,
        rankList,
      } = arg;
      const avatar = `https://wegame.gtimg.com/g.26-r.c2d3c/helper/lol/assis/images/resources/usericon/${profileIconId}.png`;

      runInAction(() => {
        this.userData = {
          displayName,
          level: `Lv.${summonerLevel}`,
          avatar,
          rankList,
        };
        this.championData = championData;
        this.careerData = { rankList };
        this.loading = false;
      });
    });
  };
}

const instance = new UserInfoStore();
export default instance;
