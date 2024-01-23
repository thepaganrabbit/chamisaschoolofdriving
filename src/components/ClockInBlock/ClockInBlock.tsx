import React from 'react';
import { ClockInProps } from '../../types';

const ClockInBlock = ({ inOut }: ClockInProps): React.ReactElement => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{inOut?.toString()}</h5>
        <label htmlFor="Email">Username</label>
        <div className="input-group">
          <span className="input-group-text">#</span>
          <input className="form-control" aria-label="Email" />
        </div>
        <label htmlFor="password">Password</label>
        <div className="input-group">
          <span className="input-group-text">
            <i className="bi bi-pass"></i>
          </span>
          <input className="form-control" aria-label="Email" />
        </div>
        <div className="login-actions">
          <button className="btn btn-primary btn-block">
            {inOut?.toString()}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClockInBlock;
