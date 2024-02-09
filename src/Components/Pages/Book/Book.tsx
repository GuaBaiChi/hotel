import React from 'react';
import Card from 'react-bootstrap/Card';
import './Book.css';

type Room = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

// Sample room data
const rooms: Room[] = [
  {
    id: 1,
    name: 'Standard Room',
    description: 'A comfortable room with all basic amenities',
    price: 100,
    imageUrl: 'https://example.com/standard-room.jpg'
  },
  {
    id: 2,
    name: 'Deluxe Room',
    description: 'A luxurious room with additional amenities',
    price: 150,
    imageUrl: 'https://example.com/deluxe-room.jpg'
  },
  // Add more room data as needed
];

function Book() {
  return (
    <div className="room-cards-container">
      {rooms.map(room => (
        <div key={room.id} className="room-card">
          <Card style={{ width: '18rem' }}>
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
    </div>
  );
}

export default Book;
