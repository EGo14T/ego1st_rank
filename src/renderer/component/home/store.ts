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
  setCareerData = (careerData: any) => {
    runInAction(() => {
      this.careerData = careerData;
    });
  };

  @action
  setUserData = (userData: any) => {
    runInAction(() => {
      this.userData = userData;
    });
  };

  @action
  setChampionData = (championData: any[]) => {
    runInAction(() => {
      this.championData = championData;
    });
  };

  @action
  setLoading = (loading: boolean) => {
    runInAction(() => {
      this.loading = loading;
    });
  };
}

const instance = new UserInfoStore();
export default instance;
