import React from 'react';

import './ToolTip.scss';
import { ToolTipProps } from '../../types';

const ToolTip = ({ children, timeOut }: ToolTipProps): React.ReactElement => {
  const [showTip, setShowTip] = React.useState<boolean>(false);
  let closeTimer: NodeJS.Timeout;
  React.useEffect(() => {
    return () => {
      clearTimeout(closeTimer);
    };
  }, []);
  return (
    <div className="tooltips">
      <div
        className="btn"
        onClick={() => {
          setShowTip(true);
          closeTimer = setTimeout(
            () => {
              console.log('in');
              setShowTip(false);
            },
            timeOut ? timeOut : 10000
          );
        }}
      >
        ?
      </div>
      {showTip && <p>{children}</p>}
    </div>
  );
};

export default ToolTip;
