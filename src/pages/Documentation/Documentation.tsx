import React from 'react';
import './Documentation.scss';

const Documentation = (): React.ReactElement => {
  return (
    <section style={{ marginTop: '3rem' }}>
      <div className="container-md">
        <h1 style={{ marginBottom: '2rem' }}>Documentation and Definitions:</h1>
        <div className="important-info-block">
          <div className="class-registration">
            <h4>What you must bring on the first class:</h4>
            <p>You must have on hand:</p>
            <ol>
              <li>Payment (If you haven't paid online)</li>
              <li>
                Social Security Card (Both paid online and registered online)
              </li>
            </ol>
          </div>
          <div className="license">
            <h4>What You Will need to take to attain your license:</h4>
            <p>You will need:</p>
            <ol>
              <li>Your drivers log. (Underage Drivers Only)</li>
              <li>Certificate of Completion</li>
              <li>2 forms of residency (Bank Statement, Bill, etc)</li>
              <li>
                2 forms of identification (Birth Certificate, Social Security
                Card)
              </li>
            </ol>
          </div>
          <div>
            <h4>What You Will need when driving with an instructor:</h4>
            <p>You will need:</p>
            <p>
              Your learners permit. Failure to do so will require you to
              reschedule.
            </p>
          </div>
          <div>
            <h4>What You Will need when driving: (Underage drivers)</h4>
            <p>You will need:</p>
            <ol>
              <li>
                Your learners permit. Failure to do so is the same as driving
                with out a license.
              </li>
              <li>
                Failure to have a Parent or Guardian will result in a ticket and
                having to retake the class at a later time.
              </li>
            </ol>
          </div>
          <div>
            <h4>What not to do:</h4>
            <ol>
              <li>
                Speeding: being caught speeding or receiving a ticket for any
                traffic stops will result in the individual having to wait until
                they are 18 to take the class. Driving is a privilege and can be
                taken away.
              </li>
              <li>
                Drugs/Alcohol: Using drugs or Alcohol while driving is strictly
                forbidden. Even marijuana! If you are caught by the police you
                will receive a DWI ticket and that could cause you to loose you
                driving privileges and or wait to take the class when individual
                is 18. If you are caught using on premises or seen by an
                instructor police will be notified and you will be removed from
                class.
              </li>
            </ol>
          </div>
        </div>
        <h2>Definitions:</h2>
        <ol>
          <li>
            <b>Permit</b>: your permit is not a drivers license. Your permit
            allows you to drive with a parent and/or guardian of legal driving
            age (person must posses a real drivers license not provisional or
            expired etc). In order to drive with your instructor you must have
            your permit with you, not a photo on your phone the physical copy of
            it. Failure to do so will be a rescheduling and possibly a fee.
          </li>
          <li>
            <b>Certificate</b>: this certificate certifies your completion of
            the class and must be brought to you when you go for your
            provisional or license. Failure to do so will mean you cannot get
            your license until you present the certificate. If you loose the
            certificate there is a replacement fee of $25.00.
          </li>
        </ol>
      </div>
    </section>
  );
};

export default Documentation;
