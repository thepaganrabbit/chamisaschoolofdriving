import React from 'react';

import './ModalBase.scss';
import { ModalProps } from '../../types';

const ModalBase = ({
  children,
  state,
  modalActions,
}: ModalProps): React.ReactElement => {
  return state ? (
    <div className="modal-custom">
      <div className="cs-modal-backdrop" />
      <div className="cs-modal">
        <div className="cs-modal-header">
          <h1>My Modal</h1>
        </div>
        <div className="cs-modal-body">{children}</div>
        <div className="cs-modal-actions">{modalActions}</div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default ModalBase;
