import { Button, Checkbox, Upload } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { inject, observer } from 'mobx-react';
import { SettingStoreType } from './types';
import './index.scss';

type SettingProps = {
  settingStore?: SettingStoreType;
};

const Setting: React.FC<SettingProps> = (props) => {
  const { acceptGame, gameDirectory } = props.settingStore!;
  const { initSetting, setAcceptGame } = props.settingStore!;

  useEffect(() => {
    initSetting && initSetting();
    window.electron.ipcRenderer.send('get-setting');
  }, []);

  const onAcceptChange = (e: any) => {
    const checked = e.target.checked;
    setAcceptGame(checked);
  };

  return (
    <div className="setting-container">
      <div className="setting-item miSans">
        <div className="game-path">
          <div className="label">{`游戏目录`}</div>
          <div className="select-file">
            <Upload
              itemRender={() => {
                return null;
              }}
            >
              {gameDirectory == '' ? (
                <Button icon={<SearchOutlined />} shape="circle"></Button>
              ) : (
                gameDirectory
              )}
            </Upload>
          </div>
        </div>
      </div>
      <div className="setting-item miSans">
        <div className="accept-game">
          <div className="label">{`自动接受对局`}</div>
          <div className="accept-checkbox">
            <Checkbox checked={acceptGame} onChange={onAcceptChange}></Checkbox>
          </div>
        </div>
      </div>
    </div>
  );
};

export default inject('settingStore')(observer(Setting));
