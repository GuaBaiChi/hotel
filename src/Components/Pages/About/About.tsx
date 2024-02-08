import React from 'react';
import './About.css';
import { Hotel, hotelData } from '../../Data/HotelData';

function HotelAboutPage({ hotel }: { hotel: Hotel }) {
  return (
    <div className="about">
      <h1>{hotel.name}</h1>
      <p>{hotel.description}</p>
      <main>
        <div className="">
          <img src={hotel.imageUrl} alt={hotel.name} />
        </div>
        <div className="">
          <h2>About {hotel.name}</h2>
          <p>{hotel.description}</p>
          <p>Phone: {hotel.phone}</p>
          <button>Book Now</button>
        </div>
      </main>
      <p>Contact us: {hotel.email}</p>
    </div>
  );
}

function About() {
  return (
    <div className="AboutContainer">
      <div className="about">
        <HotelAboutPage hotel={hotelData} />
      </div>
    </div>
  );
}

export default About;