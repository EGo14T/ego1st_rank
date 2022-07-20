import { Button, Spin } from 'antd';
import { ReactNode, useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import icon from '../../static/img/avatar.png';
import Tip from '../common/tip';
import './index.scss';

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  const [userData, setUserData] = useState({} as any);
  const [championData, setChampionData] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    window.electron.ipcRenderer.once('init-user-data', (arg: any) => {
      const { displayName, summonerLevel, profileIconId, championData } = arg;
      const avatar = `https://wegame.gtimg.com/g.26-r.c2d3c/helper/lol/assis/images/resources/usericon/${profileIconId}.png`;
      setUserData({
        displayName,
        level: `Lv.${summonerLevel}`,
        avatar,
      });
      setChampionData(championData);
      setLoading(false);
    });
  });

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
          <div className="tab-btn">
            <Button type="dashed" onClick={() => navigate('/ca')}>
              生涯
            </Button>
          </div>
          <div className="tab-btn" onClick={() => navigate('/ac')}>
            <Button type="dashed">最近战绩</Button>
          </div>
        </div>

        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Home;
