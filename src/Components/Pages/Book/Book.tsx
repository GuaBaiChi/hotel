import React from 'react';
import Card from 'react-bootstrap/Card';
import './Book.css';
import Calendar from '../../Calendar/Calendar';
import ReservationMenu from '../../ReservationMenu/ReservationMenu';
import { rooms } from '../../Data/HotelData';


function Book() {
  return (
    <>
      <ReservationMenu onSubmit={function (data: { startDate: string; endDate: string; guestCount: string; }): void {
        throw new Error('Function not implemented.');
      }} />
      <div className="room-cards-container">
        {rooms.map(room => (
          <div key={room.id} className="room-card">
            <Card style={{ width: '14rem' }}>
              <Card.Img variant="top" src={room.imageUrl} />
              <Card.Body>
                <Card.Title>{room.name}</Card.Title>
                <Card.Text>{room.description}</Card.Text>
                <Card.Text>Price: ${room.price} per night</Card.Text>
                <button className="btn btn-primary">Book Now</button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div></>
  );
}

export default Book;
