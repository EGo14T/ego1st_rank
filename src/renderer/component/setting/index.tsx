import React from 'react';
import { Outlet } from 'react-router-dom';
import './index.scss'

type SettingProps = {};

const Setting: React.FC<SettingProps> = (props) => {
  return <div className='setting'>
    <Outlet></Outlet>
  </div>;
};

export default Setting;
