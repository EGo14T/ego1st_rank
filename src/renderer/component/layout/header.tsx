import { Channels } from 'main/preload';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import icon from '../../static/img/icon.png';

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
    <div className="header">
      {/* <img className="header-icon" src={icon}></img>
      <div className="title">ego1st</div> */}
      <div className="operate-area">
        <div className="operate-btn">
          <svg
            className="icon"
            aria-hidden="true"
            onClick={onClick('mainwin-minimize')}
          >
            <use xlinkHref="#icon-zuixiaohua-02"></use>
          </svg>
        </div>
        <div className="operate-btn">
          <svg className="icon" aria-hidden="true" onClick={toSetting}>
            <use xlinkHref="#icon-shezhi-01"></use>
          </svg>
        </div>
        <div className="operate-btn">
          <svg
            className="icon"
            aria-hidden="true"
            onClick={onClick('mainwin-hide')}
          >
            <use xlinkHref="#icon-zuixiaohua-01"></use>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
