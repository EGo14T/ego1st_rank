import { Spin } from 'antd';
import { inject, observer } from 'mobx-react';
import { ReactNode, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import icon from '../../static/img/avatar.png';
import { UserInfoStoreType } from './types';
import CustomLink from '../common/customLink';
import Tip from '../common/tip';
import './index.scss';

type HomeProps = {
  userInfoStore?: UserInfoStoreType;
};

const Home: React.FC<HomeProps> = (props) => {
  const {
    setUserData,
    setChampionData,
    setLoading,
    userData,
    championData,
    loading,
  } = props.userInfoStore!;
  useEffect(() => {
    window.electron.ipcRenderer.once('init-user-data', (arg: any) => {
      const {
        displayName,
        summonerLevel,
        profileIconId,
        championData,
        rankList,
      } = arg;
      const avatar = `https://wegame.gtimg.com/g.26-r.c2d3c/helper/lol/assis/images/resources/usericon/${profileIconId}.png`;
      setUserData({
        displayName,
        level: `Lv.${summonerLevel}`,
        avatar,
        rankList,
      });
      setChampionData(championData);
      const { setCareerData } = props.userInfoStore!;
      setCareerData({ rankList });
      setLoading(false);
    });
  }, [championData]);

  const getChampionData = (): ReactNode[] => {
    const node: ReactNode[] = [];
    championData.forEach((item: any) => {
      node.push(
        <Tip
          key={item.championId}
          title={
            <>
              <div>{`英雄熟练度：${item.championPoints}`}</div>
              <div>{`英雄成就等级：${item.champLevel}`}</div>
            </>
          }
        >
          <div className="label">{item.championName}</div>
        </Tip>
      );
    });
    return node;
  };

  return (
    <>
      <div className="user-card miSans">
        <div className="avatar">
          <img
            className="avatar-img"
            src={userData.avatar ? userData.avatar : icon}
            alt=""
          />
        </div>

        <div className="info">
          <Spin size="large" spinning={loading}>
            <div className="info-container">
              <div className="basic-info">
                <div className="label">{userData.displayName}</div>
                <div className="label">{userData.level}</div>
              </div>
              <div className="hero-info">{getChampionData()}</div>
            </div>
          </Spin>
        </div>
      </div>
      <div className="charts miSans ">
        <div className="tab-area">
          <CustomLink
            to={'/career'}
            className="tab-btn"
            activcClsName={'active'}
          >
            生涯
          </CustomLink>

          <CustomLink
            to={'/achievement'}
            className="tab-btn"
            activcClsName={'active'}
          >
            最近战绩
          </CustomLink>
        </div>
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default inject('userInfoStore')(observer(Home));
