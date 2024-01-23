import React from 'react';
import { TableActionProps } from '../../types';

const TableAction = ({
  firstAction,
  secondAction,
  id,
}: TableActionProps): React.ReactElement => {
  return (
    <div>
      <div className="btn" onClick={firstAction}>
        <i className="bi bi-pencil-fill" style={{ color: '#ff9c12' }}></i>
      </div>
      <button
        className="btn"
        onClick={() => {
          secondAction(id);
        }}
      >
        <i className="bi bi-trash3" style={{ color: '#a80f0f' }}></i>
      </button>
    </div>
  );
};

export default TableAction;
