import React, { useState } from 'react';
import './ReservationMenu.css';

function ReservationMenu() {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [numPeople, setNumPeople] = useState(1);

  const handleCheckInChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCheckInDate(String(value));
  };

  const handleCheckOutChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCheckOutDate(String(value));
  };

  const handleNumPeopleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setNumPeople(parseInt(value));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Here you can handle the form submission, such as sending the reservation details to a backend server
    console.log('Reservation Details:', {
      checkInDate,
      checkOutDate,
      numPeople
    });
  };

  // Function to calculate disabled dates for check-in date picker (past dates)
  const startDate = new Date().toISOString().split('T')[0];
  const minDate = new Date().toISOString().split('T')[0];

  return (
    <div className="reservation-container">
      <h2>Make a Reservation</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Check-In Date:
          <input type="date" value={checkInDate} onChange={handleCheckInChange} min={startDate} required />
        </label>
        <label>
          Check-Out Date:
          <input type="date" value={checkOutDate} onChange={handleCheckOutChange} min={checkInDate} disabled={!checkInDate} required />
        </label>
        <label>
          Number of People:
          <input type="number" value={numPeople} onChange={handleNumPeopleChange} min={1} style={{ width: '50px' }} required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ReservationMenu;