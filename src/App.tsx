import React from 'react';
// import './App.css'
import HeaderNavBar from './Components/Header/HeaderNavBar';
import About from './Components/About/About';
import Book from './Components/Book/Book';
import Footer from './Components/Footer/Footer';
import ImageCarousel from './Components/ImageCarousel/ImageCarousel';
import CarouselTest from './Components/ImageCarousel/CarouselTest';

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <div> */}
      {/* <TabContainer /> */}
      {/* <ContactInfo /> */}
      {/* <BookingCalendar /> */}
      {/* <SiteDescription /> */}
      <HeaderNavBar />
      {/* <NavBar /> */}
      <ImageCarousel />
      {/* <CarouselTest /> */}
      <About />
      <Book />
      <Footer />
    </div>
  );
};

export default App;