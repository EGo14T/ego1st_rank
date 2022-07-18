import { Spin } from 'antd';
import { useEffect, useState } from 'react';
import icon from '../../static/img/avatar.png';
import './index.scss';

type HomeProps = {};

const Home: React.FC<HomeProps> = (props) => {
  const [userData, setUserData] = useState({} as any);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   window.electron.ipcRenderer.once('init-user-data', (arg: any) => {
  //     const { displayName, summonerLevel, profileIconId } = arg;
  //     const avatar = `https://wegame.gtimg.com/g.26-r.c2d3c/helper/lol/assis/images/resources/usericon/${profileIconId}.png`;
  //     setUserData({
  //       displayName,
  //       level: `Lv.${summonerLevel}`,
  //       avatar,
  //     });
  //     setLoading(false);
  //   });
  // });

  useEffect(() => {
    window.electron.ipcRenderer.once('test', (arg: any) => {
      console.log(arg);
      setLoading(false);
    });
  });

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
            <div style={{ height: '60px', width: '255px' }}>
              <div className="basic-info">
                <div className="label">{userData.displayName}</div>
                <div className="label">{userData.level}</div>
              </div>
              <div className="hero-info">
                <div className="label"></div>
                <div className="label"></div>
                <div className="label"></div>
              </div>
            </div>
          </Spin>
        </div>
      </div>

      <div className="charts"></div>
    </>
  );
};

export default Home;
