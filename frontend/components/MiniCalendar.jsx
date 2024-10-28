import React, { useEffect, useState } from 'react';
import { generateRecurringDates } from '../utils/dateUtils';

const MiniCalendar = ({ startDate, endDate, recurrence }) => {
  const [recurringDates, setRecurringDates] = useState([]);

  useEffect(() => {
    if (startDate && recurrence) {
      const dates = generateRecurringDates(startDate, endDate, recurrence);
      setRecurringDates(dates);
    }
  }, [startDate, endDate, recurrence]);

  return (
    <div className="mini-calendar">
      <h4>Recurring Dates:</h4>
      <ul>
        {recurringDates.map((date, index) => (
          <li key={index}>{date.toDateString()}</li>
        ))}
      </ul>
    </div>
  );
};

export default MiniCalendar;
