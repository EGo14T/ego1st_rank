import React from 'react';
import { useNavigate } from 'react-router-dom';
import Tip from '../common/tip';
import './index.scss';

type SettingProps = {};

const Setting: React.FC<SettingProps> = (props) => {
  const navigate = useNavigate();

  return (
    <div className="setting-container">
      <header>
        <div className="setting-header">

        </div>
      </header>
    </div>
  );
};

export default Setting;
