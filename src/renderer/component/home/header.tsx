import React from 'react';
import icon from '../../static/img/icon.png';

type HeaderProps = {};

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <div className="header">
      <img className="header-icon" src={icon}></img>
      <div className="title">ego1st</div>
      <div className="operate-area">
        <div className="operate-btn">
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-zuixiaohua-02"></use>
          </svg>
        </div>
        <div className="operate-btn">
          <svg className="icon" aria-hidden="true">
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
