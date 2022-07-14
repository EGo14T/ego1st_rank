import React from 'react';
import { useNavigate } from 'react-router-dom';
import icon from '../../static/img/icon.png';

type HeaderProps = {};

const Header: React.FC<HeaderProps> = (props) => {
  const navigate = useNavigate();

  const click = () => {
    navigate('/setting');
  };

  const click1 = () => {
    navigate('/');
  };

  return (
    <div className="header">
      <img className="header-icon" src={icon}></img>
      <div className="title">ego1st</div>
      <div className="operate-area">
        <div className="operate-btn">
          <svg className="icon" aria-hidden="true" onClick={click}>
            <use xlinkHref="#icon-zuixiaohua-02"></use>
          </svg>
        </div>
        <div className="operate-btn">
          <svg className="icon" aria-hidden="true" onClick={click1}>
            <use xlinkHref="#icon-shezhi-01"></use>
          </svg>
        </div>
        <div className="operate-btn">
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-zuixiaohua-01"></use>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
