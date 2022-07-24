import { Spin } from 'antd';
import { toJS } from 'mobx';
import { inject, observer } from 'mobx-react';
import React, { ReactNode } from 'react';
import { UserInfoStoreType } from '../home/types';
import './index.scss';

type CareerProps = {
  userInfoStore?: UserInfoStoreType;
};

const RankInfo: React.FC<{ rankData: any }> = (props) => {
  const { rankData } = props;

  return (
    <div className="rank-info">
      <div className="rank-title">{rankData.title}</div>
      <div className="rank-point">{rankData.point}</div>
    </div>
  );
};

const Career: React.FC<CareerProps> = (props) => {
  const { careerData, loading } = props.userInfoStore!;

  const rankListRender = (): ReactNode => {
    const rankList: any[] = toJS(careerData.rankList) || [];
    const nodeItem: ReactNode[] = [];

    rankList.forEach((item: any, index: number) => {
      nodeItem.push(<RankInfo key={index} rankData={item}></RankInfo>);
    });

    return nodeItem;
  };

  return (
    <Spin size="large" spinning={loading}>
      <div className="carrer-container">
        {rankListRender()}
        <></>
      </div>
    </Spin>
  );
};

export default inject('userInfoStore')(observer(Career));
