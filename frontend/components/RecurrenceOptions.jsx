import React, { useState } from 'react';

const RecurrenceOptions = ({ onRecurrenceChange }) => {
  const [recurrence, setRecurrence] = useState('daily');

  const handleChange = (e) => {
    setRecurrence(e.target.value);
    onRecurrenceChange(e.target.value);
  };

  return (
    <div className="recurrence-options">
      <label>Recurrence:</label>
      <select value={recurrence} onChange={handleChange} className="border p-2">
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
    </div>
  );
};

export default RecurrenceOptions;
