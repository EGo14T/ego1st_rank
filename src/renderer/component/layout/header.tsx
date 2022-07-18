import React from 'react';
import { Channels } from 'main/preload';
import { useNavigate } from 'react-router-dom';
import icon from '../../static/img/icon.png';
import Tip from '../common/tip';

type HeaderProps = {};

const Header: React.FC<HeaderProps> = (props) => {
  const navigate = useNavigate();

  const onClick = (channel: Channels) => {
    return () => {
      window.electron.ipcRenderer.send(channel);
    };
  };

  const toSetting = () => {
    navigate('/setting');
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
              <use xlinkHref="#icon-shezhi-01"></use>
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
