import React from 'react';
import './Super.scss';
import car from '../../assets/carfree2.jpg';

const Super = (): React.ReactElement => {
  return (
    <section>
      <div className="container-md super">
        <img
          src={car}
          className="img-fluid"
          style={{
            height: '20rem',
            width: '100%',
            objectFit: 'cover',
            objectPosition: 'top right',
          }}
          alt="..."
        />
        <div className="brand">
          <h1>Chamisa School of Driving</h1>
        </div>
      </div>
    </section>
  );
};

export default Super;
