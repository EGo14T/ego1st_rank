export interface SettingStoreType {
  acceptGame: boolean;
  gameDirectory: string;
  initSetting: () => void;
  setAcceptGame: (checked: boolean) => void;
}
