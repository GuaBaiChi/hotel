import React from 'react';
// import './About.css'

interface Hotel {
  name: string;
  description: string;
  imageUrl: string;
  phone: string;
  email: string;
}

function HotelLandingPage({ hotel }: { hotel: Hotel }) {
  return (
    <div className="">
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
      <p>Contact us: {hotelData.email}</p>
    </div>
  );
}


export const hotelData: Hotel = {
  name: "Luxury Resort",
  description: "Experience luxury at our beautiful resort.",
  imageUrl: "https://example.com/hotel-image.jpg",
  phone: "0-123-456-789",
  email: "Fhloston@Paradise.com",
};


const About: React.FC = () => {
  return (
    <div className="About">
      <HotelLandingPage hotel={hotelData} />
    </div>
  );
};

export default About;
