import React from 'react';
import './Contact.scss';

const Contact = (): React.ReactElement => {
  return (
    <section style={{marginTop: '3rem'}}>
      <div className="container-md">
        <h1 style={{marginBottom: '2rem'}}>Contact Information:</h1>
        <div className="contact-container">
            <div></div>
          <div className="espanola">
            <h2 style={{marginBottom: '2rem'}}>Espanola Location:</h2>
            <p>
              812 N Paseo De Onate,
              <br /> Española,NM 87532 <br /> (505) 747-6474
            </p>
            <h6>Office Hours:</h6>
            <ul>
              <li>Monday: 9:00a.m.-7:00p.m.</li>
              <li>Tuesday: 9:00a.m.-7:00p.m.</li>
              <li>Wednesday: 9:00a.m.-7:00p.m.</li>
              <li>Thursday: 9:00a.m.-7:00p.m.</li>
              <li>Friday: 9:00a.m.-7:00p.m.</li>
              <li>Saturday: CLOSED</li>
              <li>Sunday: CLOSED</li>
            </ul>

            <p>
              Secretary: Luanna F Georgia <br />
              Manager: Mary L Gonzales
            </p>
          </div>
          <div></div>
          <div></div>

          <div className="santafe">
            <h2 style={{marginBottom: '2rem'}}>Santa Fe Location:</h2>
            <p>
              4989 Airport Rd,
              <br /> Santa Fe, NM 87507 <br /> (505) 984-3072
            </p>
            <h6>Office Hours:</h6>
            <ul>
              <li>Monday: 9:00a.m.-7:00p.m.</li>
              <li>Tuesday: 9:00a.m.-7:00p.m.</li>
              <li>Wednesday: 9:00a.m.-7:00p.m.</li>
              <li>Thursday: 9:00a.m.-7:00p.m.</li>
              <li>Friday: 9:00a.m.-7:00p.m.</li>
              <li>Saturday: CLOSED</li>
              <li>Sunday: CLOSED</li>
            </ul>

            <p>
              Secretary: Stephani H Miller <br />
              Manager/Owner: Ruben Salazar
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
