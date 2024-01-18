import React from 'react';
import './Classes.scss';

const Classes = (): React.ReactElement => {
  return (
    <section style={{ marginTop: '3rem' }}>
      <div className="container-md">
        <div>
            <h2>Information:</h2>
            <p>Classes Will be held every 12 week and will go on for three weeks.</p>
            <br />
            <h2>Students will learn:</h2>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, similique nobis, officiis veritatis ex sunt aliquam ea beatae dolore reiciendis pariatur iure deserunt unde illo id nihil. Totam, voluptate suscipit!
                Iure nulla aliquam labore quo magni rem impedit libero dicta veniam! Officiis, reiciendis quia incidunt quis repellat beatae cum animi, error aut dicta dignissimos sapiente explicabo fuga tempore cumque quae.
                Quis culpa suscipit architecto, obcaecati mollitia placeat similique quidem blanditiis soluta recusandae est ipsa excepturi harum odit nobis officiis voluptatum animi ut consectetur facere sint dolorum hic quisquam? Porro, non!
            </p>
            <h2>Expected Schedule:</h2>
            <ol>
                <li>Students will attend a three week course before receiving their permit.</li>
                <li>Students must complete 50 hours driving outside the classroom (With a parent or guardian of age to drive) before driving with an instructor.</li>
                <li>Students must drive a minimum of 3 times with one of our instructors and must pass the physical exam.</li>
                <li>A written and computer exam will be given before the student can receive their provisional license.</li>
            </ol>
            <h3>Things to take Note of:</h3>
            <ul>
                <li>A permit DOES NOT mean a drivers license.</li>
                <li>In order to drive with a instructor the student MUST bring their permit or they will be rescheduled. NO EXCEPTIONS.</li>
                <li>If a student looses their permit or cert they will be required to pay a non refundable fee of $25.00</li>
                <li>Not giving 24 hour notification before cancellation of a drive time will result in a $25.00 fee. If you need to cancel do so ahead of time.</li>
            </ul>
            <p>If you do not understand anything please ask an instructor. For mor information and definitions please see the information page. Classes are first come first serve once payment is received your spot will be guaranteed.</p>
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
        </div>
      </div>
    </section>
  );
};

export default Classes;
