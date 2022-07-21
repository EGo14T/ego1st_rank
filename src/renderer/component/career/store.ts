import { action, makeObservable, observable, runInAction } from 'mobx';

export class CareerStore {
  constructor() {
    makeObservable(this);
  }

  @observable test: string = '1';

  @action
  setTest = (s: string) => {
    this.test = s;
  };
}

const instance = new CareerStore();
export default instance;
