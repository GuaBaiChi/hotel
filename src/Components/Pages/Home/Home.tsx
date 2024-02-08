import React from 'react';
import './Home.css';
import HeaderNavBar from '../../HeaderNavBar/HeaderNavBar';
import CarouselTest from '../../ImageCarousel/CarouselTest';
import Footer from '../../Footer/Footer';
import { Hotel, hotelData } from '../../Data/HotelData';

// ship pics
import shipOcean from '../../Images/shipOcean.png';
import shipPlanet from '../../Images/shipPlanet.png';
import shipSunset from '../../Images/shipSunset.jpg';

export const SHIP_PICS = [
  // { image: shipPlanet },
  { image: shipSunset },
  { image: shipOcean }
];

function HotelLandingPage({ hotel }: { hotel: Hotel }) {
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

function Home() {
  return (
    <>
      <CarouselTest />
      <div className="home-container">
        <div className="home">
          <HotelLandingPage hotel={hotelData} />
        </div>
      </div>
    </>
  );
}



export default Home;
