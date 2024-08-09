import React, { useState } from 'react';
import '../styles/index.css'; // Ensure this path is correct

const Slideshow = () => {
  const images = [
    '/assets/joyful-woman-dancing-blue-background.jpg',
    '/assets/front-view-osteopathic-therapist-checking-female-patient-s-shoulder-movement.jpg',
    '/assets/closeup-medical-technician-starting-mri-scan-examination-patient-hospital.jpg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToPrevious = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      setIsTransitioning(false);
    }, 1000); // Duration of the fade transition
  };

  const goToNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsTransitioning(false);
    }, 1000); // Duration of the fade transition
  };

  return (
    <div className="slideshow">
      <div className="slideshow-wrapper">
        <img
          src={images[currentIndex]}
          className={`slideshow-image ${isTransitioning ? 'fade-out' : 'fade-in'}`}
          alt={`Slide ${currentIndex + 1}`}
        />
        <button className="slideshow-control prev" onClick={goToPrevious}>&#10094;</button>
        <button className="slideshow-control next" onClick={goToNext}>&#10095;</button>
      </div>
      <div className="slideshow-dots">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${currentIndex === idx ? 'active' : ''}`}
            onClick={() => {
              setIsTransitioning(true);
              setTimeout(() => {
                setCurrentIndex(idx);
                setIsTransitioning(false);
              }, 1000); // Duration of the fade transition
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;

