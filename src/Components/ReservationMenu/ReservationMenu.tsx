import React, { useState } from 'react';
import './ReservationMenu.css';

function ReservationMenu() {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [numPeople, setNumPeople] = useState(1);

  const handleCheckInChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCheckInDate(value);
    // When check-in date changes, reset check-out date
    setCheckOutDate('');
  };

  const handleCheckOutChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCheckOutDate(value);
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

  // Calculate minimum date for check-out date picker based on selected check-in date
  const minCheckOutDate = checkInDate ? new Date(checkInDate) : new Date();
  minCheckOutDate.setDate(minCheckOutDate.getDate() + 1);

  // Calculate the total number of nights
  const totalNights = checkInDate && checkOutDate ? Math.ceil((new Date(checkOutDate).getTime() - new Date(checkInDate).getTime()) / (1000 * 60 * 60 * 24)) : 0;

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
          <input type="date" value={checkOutDate} onChange={handleCheckOutChange} min={minCheckOutDate.toISOString().split('T')[0]} disabled={!checkInDate} required />
        </label>
        <label>
          Number of People:
          <input type="number" value={numPeople} onChange={handleNumPeopleChange} min={1} style={{ width: '50px' }} required />
        </label>
        <label>
          Total Nights: {totalNights}
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ReservationMenu;
