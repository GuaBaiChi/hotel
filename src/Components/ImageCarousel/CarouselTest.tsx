import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';

import shipOcean from '../../Images/shipOcean.png';
import shipPlanet from '../../Images/shipPlanet.png';
import shipSunset from '../../Images/shipSunset.jpg';

export const SHIP_PICS = [
  // { image: shipPlanet },
  { image: shipSunset },
  { image: shipOcean }
];

const CarouselTest: React.FC = () => {
  const carouselItemData = SHIP_PICS.map((item, index) => (
    <Carousel.Item key={index}>
      <div className="carousel-container" style={{ backgroundImage: `url(${item.image})` }}>
        {/* <img src={item.image} alt={"can't load"} className="image-style" /> */}
      </div>
    </Carousel.Item>
  ));

  return (
    <div>
      <Carousel>
        {carouselItemData}
      </Carousel>
    </div>
  );
};

export default CarouselTest;
