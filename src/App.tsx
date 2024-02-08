import React from 'react';
import './App.css'
import HeaderNavBar from './Components/Header/HeaderNavBar';
import About from './Components/About/About';
import Book from './Components/Pages/Book/Book';
import Footer from './Components/Footer/Footer';
import ImageCarousel from './Components/ImageCarousel/ImageCarousel';
import CarouselTest from './Components/ImageCarousel/CarouselTest';
import Contest from './Components/Pages/Contest/Contest';
import Home from './Components/Home/Home';

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <div> */}
      {/* <TabContainer /> */}
      {/* <ContactInfo /> */}
      {/* <BookingCalendar /> */}
      {/* <SiteDescription /> */}
      {/* <NavBar /> */}
      {/* <ImageCarousel /> */}
      {/* <HeaderNavBar /> */}
      {/* <CarouselTest /> */}
      <Home />
      {/* <Footer /> */}
      {/* <About /> */}
      {/* <Book /> */}
      {/* <Contest /> */}
    </div>
  );
};

export default App;