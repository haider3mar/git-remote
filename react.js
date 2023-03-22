import React, { useState } from 'react';
import React from 'react';
import BookingForm from './BookingForm';
function BookingForm() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00');
  const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];

  function handleDateChange(event) {
    setDate(event.target.value);
  }

  function handleTimeChange(event) {
    setTime(event.target.value);
  }

  return (
    <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" value={date} onChange={handleDateChange} />

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={time} onChange={handleTimeChange}>
        {availableTimes.map((availableTime, index) => (
          <option key={index} value={availableTime}>
            {availableTime}
          </option>
        ))}
      </select>
    </form>
  );
}




function BookingPage() {
  return (
    <div>
      <h1>Book a Table</h1>
      <BookingForm />
    </div>
  );
}
export default BookingForm;

