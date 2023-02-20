import React from 'react';
import { Tooltip } from 'antd';

const FooterIcon = ({ icon, tooltipText }) => {
  return (
    <>
      <Tooltip
        placement="bottom"
        title={<span>{tooltipText}</span>}
        arrowPointAtCenter={true}
        mouseEnterDelay={0.4}
      >
        {icon}
      </Tooltip>
    </>
  );
};

export default FooterIcon;
