import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
import ShadowBox from "./ShadowBox"

// import images
import shipOcean from '../../Images/shipOcean.png'
import shipPlanet from '../../Images/shipPlanet.png'
import shipSunset from '../../Images/shipSunset.jpg'
// import shipSunset from '../../Images/shipSunset.jpg'
// import shipSunset from '../../Images/shipSunset.jpg'
import './Carousel.css'

export const SHIP_PICS = [
  {
    image: shipPlanet
  },
  {
    image: shipSunset
  },
  {
    image: shipOcean
  },
]



export default function CarouselTest() {

  // State for Active index
  const [activeIndex, setActiveIndex] = React.useState(0);

  // State for Animation
  const [animating, setAnimating] = React.useState(false);

  // Sample items for Carousel



  // Carousel Item Data
  const carouselItemData = SHIP_PICS.map((item) => {
    return (
      <Carousel.Item>
        <div style={{ "backgroundImage": `url(${item.image})`, "height": "500px", "backgroundSize": "contain", "backgroundRepeat": "no-repeat", "backgroundPositionX": "center" }}>
          {/* <img src={item.image} alt={"can't load"} style={ImageStyle} /> */}
        </div>
      </Carousel.Item>
    );
  });

  return (
    <div style={{ "backgroundColor": "black" }}>

      <Carousel>
        {carouselItemData}
      </Carousel>

    </div>
    // <ShadowBox mode="top">
    //   <div style={ShadowTopStyle}>
    //     <Carousel>
    //       {carouselItemData}
    //     </Carousel>
    //   </div >
    // </ShadowBox>
  );
}

const PromoOuterStyle = {
  "paddingBottom": "10vh"
}
const PromoInnerStyle = {
  /*"margin": "10% 20px 10px 20px",*/
  "display": "contents",
  /*"display": "flex",*/
  "justifyContent": "center",
  "lineHeight": "1.5rem",
}
const LinkStyle = {
  "wordWrap": "break-word" as const
}
const ContentStyle = {
  "padding": "3em",
  "color": "white",
  "fontFamily": "Audiowide",
  "textAlign": "center" as const
}
const ImageStyle = {
  "maxWidth": "50vw",
  "maxHeight": "30vh",
  "display": "block",
  "marginLeft": "auto",
  "marginRight": "auto"
}
const CarouselStyle = {
  // "paddingLeft":"10vw", 
  // "paddingRight":"10vw"
  // commenting out because it makes the paragraph contents too thin on mobile.
}
const ShadowTopStyle = {
  display: 'inlineBlock',
  width: "100%"
}

const CarouselRowStyle = {
  "minHeight": "350px",
  "marginLeft": "auto",
  "marginRight": "auto"
}