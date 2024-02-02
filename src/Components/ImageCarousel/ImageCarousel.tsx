import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import shipOcean from '../../Images/shipOcean.png'
import shipPlanet from '../../Images/shipPlanet.png'
import shipSunset from '../../Images/shipSunset.jpg'


export default function ImageCarousel() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        {/* <ShipOcean /> */}
        {shipOcean}
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Ship Ocean</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        {/* <ShipPlanet /> */}
        {shipPlanet}
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Ship Planet</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ShipSunset /> */}
        {shipSunset}
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Ship Sunset</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
