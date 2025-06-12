import React from 'react';
import { Footer, Navbar, BookingCalendar } from '../components';
import '../styles/index.css';

const BookTime = () => {
  return (
    <div>
      <Navbar />
     
        <BookingCalendar/>

      <Footer/>
    </div>
  );
};

export default BookTime;
