import React from 'react';
import '../../App.css'
import Header from '../Header/Header'
import HeaderNavbar from '../Header/HeaderNavBar';

interface Hotel {
  name: string;
  description: string;
  location: string;
  imageUrl: string;
  phone: string;
}

function HotelLandingPage({ hotel }: { hotel: Hotel }) {
  return (
    <div className="landing-page">
      <header>
        <h1>{hotel.name}</h1>
        <p>{hotel.description}</p>
      </header>
      <main>
        <div className="hotel-image">
          <img src={hotel.imageUrl} alt={hotel.name} />
        </div>
        <div className="hotel-info">
          <h2>About {hotel.name}</h2>
          <p>{hotel.description}</p>
          <p>Location: {hotel.location}</p>
          <p>Phone: {hotel.phone}</p>
          <button>Book Now</button>
        </div>
      </main>
      <footer>
        <p>Contact us: hotel@example.com</p>
      </footer>
    </div>
  );
}


const hotelData: Hotel = {
  name: "Luxury Resort",
  description: "Experience luxury at our beautiful resort.",
  location: "123 Palm Avenue, Coconut Grove Tropical Island, Tropicopia 54321",
  imageUrl: "https://example.com/hotel-image.jpg",
  phone: "0-123-456-789",
};


const About: React.FC = () => {
  return (
    <div className="App">
      <HotelLandingPage hotel={hotelData} />
    </div>
  );
};

export default About;
