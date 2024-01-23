import React from 'react';
import { ActionsProps } from '../../../types';

const ModalActions = ({ actions }: ActionsProps): React.ReactElement => {
  React.useEffect(() => {
    console.log();
  }, []);
  return (
    <>
      {actions.map((action) => (
        <button
          key={action.id}
          className={`btn ${action.color}`}
          style={{ marginRight: '1rem' }}
          onClick={action.action}
        >
          {action.label}
        </button>
      ))}
    </>
  );
};

export default ModalActions;
