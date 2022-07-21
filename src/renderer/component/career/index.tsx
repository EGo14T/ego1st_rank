import { Button } from 'antd';
import { inject, observer } from 'mobx-react';
import React from 'react';
import { CareerStoreType } from './types';

type CareerProps = {
  careerStore?: CareerStoreType;
};

const Career: React.FC<CareerProps> = (props) => {
  const { test, setTest } = props.careerStore!;

  const click = () => {
    setTest('dddddd');
  };

  return (
    <div>
      <Button onClick={click}>test</Button>
      {test}
    </div>
  );
};

export default inject('careerStore')(observer(Career));
