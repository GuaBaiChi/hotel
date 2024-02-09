import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';

interface CarouselItem {
  image: string;
}

interface Props {
  items: CarouselItem[];
}

function CarouselComponent({ items }: Props) {
  const carouselItemData = items.map((item, index) => (
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
}

export default CarouselComponent;
