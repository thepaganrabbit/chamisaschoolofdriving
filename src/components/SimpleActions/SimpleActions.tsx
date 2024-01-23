import React from 'react';

import './SimpleActions.scss';

const SimpleActions = (): React.ReactElement => {
  return (
    <section style={{ marginTop: '3rem' }}>
      <div className="container-md">
        <div className="simple-action">
          <button className="btn btn-danger">Logout</button>
          <button className="btn btn-primary">Clock Out</button>
        </div>
      </div>
    </section>
  );
};

export default SimpleActions;
