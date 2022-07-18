import { Tooltip, TooltipProps } from 'antd';
import React, { ReactNode } from 'react';

type TipProps = {
  title: string;
  children: ReactNode;
};

const Tip: React.FC<TipProps & TooltipProps> = (props) => {
  const { title, children } = props;

  return (
    <Tooltip
      title={title}
      overlayStyle={{ fontSize: '12px' }}
      align={{
        offset: [0, 5],
      }}
      mouseEnterDelay={1}
      destroyTooltipOnHide={true}
    >
      {children}
    </Tooltip>
  );
};

export default Tip;
