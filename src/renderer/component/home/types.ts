export interface UserInfoStoreType {
  userData: any;
  championData: any[];
  careerData: any;
  loading: boolean;
  setUserData: (userData: any) => void;
  setChampionData: (championData: any[]) => void;
  setCareerData: (careerData: any) => void;
  setLoading: (loading: boolean) => void;
}
