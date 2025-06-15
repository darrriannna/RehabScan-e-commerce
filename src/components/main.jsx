import React from 'react';
import '../styles/index.css'; 
import NaprapatSection from './Naprapat';
import { useEffect } from "react";
import Prices from './Prices';


const Home = () => {useEffect(() => {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  const elements = document.querySelectorAll(".animate-on-scroll");
  elements.forEach(el => observer.observe(el));

  return () => elements.forEach(el => observer.unobserve(el));
}, []);
  return (
    <div className="main page-wrapper">
 <div className='main-image'>
 <div className="overlay .animate-on-scroll">
        <h3 className='header-home'>Boka tid hos <span className='italic'>Legitimerad Naprapat</span> i Helsingborg</h3>
        <button className='btn-book-pink'> <a
    className="link-book"
    href="https://ww1.clinicbuddy.com/onlinebooking/-5030"
    target="_blank"
    rel="noopener noreferrer"
  >
    BOKA NU
  </a></button>
        <div ><img className='small-logo' src="./assets/logo-aktiv.png" alt="naprapat aktiv fysio helsingborg" /></div>
      </div>

      </div>
      <div className='map-home'>
      <iframe
  title="Google Maps Location"
 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2379.0681561757474!2d12.6871946!3d56.049832099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465233c5994048e3%3A0xb04c7342e5690215!2sAktiv%20Fysio%20-%20Sjukgymnastik%20Helsingborg!5e1!3m2!1sen!2sse!4v1748541892962!5m2!1sen!2sse"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
<div><Prices/></div>
  </div>
  <NaprapatSection/>
 </div>
      


  );
};

export default Home;
