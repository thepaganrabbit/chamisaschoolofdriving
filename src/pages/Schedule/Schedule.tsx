import React from 'react';
import Calendar from '../../components/Calendar/Calendar';

const Schedule = (): React.ReactElement => {
  return (
    <section style={{ marginTop: '3rem' }}>
      <div className="container-md">
        <Calendar />
      </div>
    </section>
  );
};

export default Schedule;
