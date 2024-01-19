import React from 'react';

const Calendar = (): React.ReactElement => {
  return (
    <iframe
      src="https://calendar.google.com/calendar/embed?src=d56943c86bd8381fedd28b7515c9aa4332d21f50e6478c9eae68cc95733e162a%40group.calendar.google.com&ctz=UTC"
      style={{ border: 0, width: '100%', height: 1200 }}
    ></iframe>
  );
};

export default Calendar;
