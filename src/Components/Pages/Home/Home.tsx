import './Home.css';
import CarouselComponent from '../../ImageCarousel/CarouselComponent';

// data
import { Hotel, hotelData } from '../../Data/HotelData';
import { SHIP_PICS } from '../../Data/ShipImagesData';


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
      <CarouselComponent items={SHIP_PICS} />
      <div className="home-container">
        <div className="home">
          <HotelLandingPage hotel={hotelData} />
        </div>
      </div>
    </>
  );
}



export default Home;
