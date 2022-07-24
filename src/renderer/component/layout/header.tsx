import React, { useEffect, useState } from 'react';
import { Channels } from 'main/preload';
import { useLocation, useNavigate } from 'react-router-dom';
import icon from '../../static/img/icon.png';
import Tip from '../common/tip';

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [currentPath, setCurrentPath] = useState('/career');

  const onClick = (channel: Channels) => {
    return () => {
      window.electron.ipcRenderer.send(channel);
    };
  };

  const toSetting = () => {
    if (location.pathname == '/career') {
      navigate('/setting');
      setCurrentPath('/setting');
    } else {
      navigate('/career');
      setCurrentPath('/career');
    }
  };

  return (
    <div className="header caroline">
      <img className="header-icon" src={icon}></img>
      <div className="title">ego1st</div>
      <div className="operate-area">
        <div className="operate-btn">
          <Tip title="最小化">
            <svg
              className="icon"
              aria-hidden="true"
              onClick={onClick('mainwin-minimize')}
            >
              <use xlinkHref="#icon-zuixiaohua-02"></use>
            </svg>
          </Tip>
        </div>
        <div className="operate-btn">
          <Tip title="设置">
            <svg className="icon" aria-hidden="true" onClick={toSetting}>
              {currentPath == '/setting' ? (
                <use xlinkHref="#icon-fanhui"></use>
              ) : (
                <use xlinkHref="#icon-shezhi-01"></use>
              )}
            </svg>
          </Tip>
        </div>
        <div className="operate-btn">
          <Tip title="关闭">
            <svg
              className="icon"
              aria-hidden="true"
              onClick={onClick('mainwin-hide')}
            >
              <use xlinkHref="#icon-zuixiaohua-01"></use>
            </svg>
          </Tip>
        </div>
      </div>
    </div>
  );
};

export default Header;
