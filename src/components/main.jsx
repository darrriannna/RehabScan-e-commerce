import React, { useState, useEffect } from 'react';
import '../styles/index.css'; // Import your custom CSS file
import Slideshow from './HomeSlide';



const Home = () => {

  return (
    <div className="main">
      
      <Slideshow />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <img src="./assets/senior-couple-talking-with-their-doctor-while-he-is-showing-them-something-computer.jpg" className="card-img" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Get the appointment with a doctor now</h5>
                <p className="card-text">
                  På NO Kliniken träffar du ett team med naprapater och ortoped. Vårt omhändertagande av dig återskapar kroppens goda rörelse och funktion. Vi har ett etablerat kontaktnät
                   av andra experter som anlitas när så behövs. Förutom behandlingar ger vi dig även individuella råd och rekommendationer. 
                  Dessa kan handla om hållning, ergonomi, motion eller mer specifika rehabövningar. Detta gör resultatet än bättre och minimerar risken för återfall.
                </p>
                <a href="pages/book-form.html" className="btn">Book</a>
              </div>
            </div>
          </div>
          <div className="col">
            <p className="title">NOVA - healthcare at its finest</p>
            <p className="description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam blanditiis molestiae enim dolor in odio sint provident eius, culpa magnam fugit nemo minus, eaque consectetur? Accusantium quis excepturi qui aspernatur.
            </p>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">MRI</h5>
                <h6 className="card-subtitle">Get your MR results within hours</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="card-link">Read More</a>
                <a href="pages/book-form.html" className="card-link">Book Time</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Function to handle carousel sliding
const slide = (direction) => {
  const items = document.querySelectorAll('.carousel-item');
  const activeItem = document.querySelector('.carousel-item.active');
  let index = Array.from(items).indexOf(activeItem);
  items[index].classList.remove('active');
  index = (index + direction + items.length) % items.length;
  items[index].classList.add('active');
};

export default Home;



