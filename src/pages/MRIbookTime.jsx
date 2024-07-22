import React from 'react';
import MRIForm from '../components/MRIForm';
import { Footer, Navbar } from '../components';
import '../styles/bookform.css';

const MRIbookTime = () => {
  return (
    <div>
      <Navbar />
      <div className="book-time-container">
        <h2 className="book-time-text">Din undersökning</h2>
      </div>
      <MRIForm />
      <Footer/>
    </div>
  );
};

export default MRIbookTime;
