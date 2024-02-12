import React, { useState } from 'react';
import './ReservationMenu.css'

function ReservationMenu() {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [numPeople, setNumPeople] = useState(1);

  const handleCheckInChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setCheckInDate(event.target.value);
  };

  const handleCheckOutChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setCheckOutDate(event.target.value);
  };

  const handleNumPeopleChange = (event: { target: { value: string; }; }) => {
    setNumPeople(parseInt(event.target.value));
  };

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    // Here you can handle the form submission, such as sending the reservation details to a backend server
    console.log('Reservation Details:', {
      checkInDate,
      checkOutDate,
      numPeople
    });
  };

  return (
    <div className="reservation-container">
      <h2>Make a Reservation</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Check-In Date:
          <input type="date" value={checkInDate} onChange={handleCheckInChange} required />
        </label>
        <label>
          Check-Out Date:
          <input type="date" value={checkOutDate} onChange={handleCheckOutChange} required />
        </label>
        <label>
          Number of People:
          <input type="number" value={numPeople} onChange={handleNumPeopleChange} min={1} required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}


export default ReservationMenu;
