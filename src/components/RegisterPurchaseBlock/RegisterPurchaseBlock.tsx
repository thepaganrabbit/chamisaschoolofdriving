import React from 'react';

import './RegisterPurchaseBlock.scss';

const RegisterPurchaseBlock = (): React.ReactElement => {
  return (
    <div className="action-block">
      <h1>Register for a class:</h1>
      <div className="actions">
        <div>
          <h3>Pay Online:</h3>
          <button className="btn btn-primary">REGISTER</button>
          <p>Will guarantee you a space in the class.</p>
        </div>
        <div>
          <h3>Register Online:</h3>
          <button className="btn btn-warning">REGISTER</button>
          <p>Will put your name down but does not guarantee you a spot.</p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPurchaseBlock;
