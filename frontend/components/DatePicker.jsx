import React, { useState } from 'react';

const DatePicker = ({ onDateSelect }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (e) => {
    const date = e.target.value;
    setStartDate(date);
    onDateSelect({ startDate: date, endDate });
  };

  const handleEndDateChange = (e) => {
    const date = e.target.value;
    setEndDate(date);
    onDateSelect({ startDate, endDate: date });
  };

  return (
    <div className="date-picker">
      <label>Start Date:</label>
      <input
        type="date"
        value={startDate || ''}
        onChange={handleStartDateChange}
        className="border p-2"
      />
      <label>End Date:</label>
      <input
        type="date"
        value={endDate || ''}
        onChange={handleEndDateChange}
        className="border p-2"
      />
    </div>
  );
};

export default DatePicker;
