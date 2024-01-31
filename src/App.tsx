import React from 'react';
import './App.css'
import Header from './Components/Header/Header'
import HeaderNavBar from './Components/Header/HeaderNavBar';
import About from './Components/About/About';
import HeaderTest from './Components/Header/HeaderTest';

const App: React.FC = () => {
  return (
    // <div className="App">
    <div>
      {/* <NavBar /> */}
      {/* <ImageCarousel /> */}
      {/* <TabContainer /> */}
      {/* <ContactInfo /> */}
      {/* <BookingCalendar /> */}
      {/* <SiteDescription /> */}
      <HeaderNavBar />
      {/* <Header /> */}
      {/* <HeaderTest /> */}
      <About />
    </div>
  );
};

export default App;