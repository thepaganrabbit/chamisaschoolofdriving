import React from 'react';
import base64 from 'base-64';

import { LogInClockin } from '../../types';

const LoginBlock = ({ onAction }: LogInClockin): React.ReactElement => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Login</h5>
        <label htmlFor="Email">Username</label>
        <div className="input-group">
          <span className="input-group-text">#</span>
          <input className="form-control" aria-label="Email" />
        </div>
        <label htmlFor="password" style={{ marginTop: '2rem' }}>
          Password
        </label>
        <div className="input-group">
          <span className="input-group-text">
            <i className="bi bi-pass"></i>
          </span>
          <input className="form-control" aria-label="Email" />
        </div>

        <div
          className="form-check"
          style={{ marginTop: '1rem', marginBottom: '1rem' }}
        >
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Clock in?
          </label>
          <div className="login-actions" style={{ marginTop: '2rem' }}>
            <button
              className="btn btn-primary btn-block"
              onClick={() => {
                onAction({
                  username: 'tom',
                  password: base64.encode('djjdjdjd'),
                });
              }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginBlock;
