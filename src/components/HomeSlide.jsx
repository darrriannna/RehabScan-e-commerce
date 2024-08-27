import React, { useState } from 'react';
import '../styles/index.css'; // Ensure this path is correct

const Slideshow = () => {
  const slides = [
    'Välkommen till oss på Göteborgs NOPainClinic!',
    'Vi har den bästa specialisten inom naprapati och ortopedi.',
    'Vi erbjuder undersökningar med magnetkamera på ett snabbt och enkelt sätt.',
  ];

  const [currentIndex, setCurrentIndex] = useState(0); // Start at the first slide
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToPrevious = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
      setIsTransitioning(false);
    }, 500); // Shorter fade duration for smoother effect
  };

  const goToNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      setIsTransitioning(false);
    }, 500); // Shorter fade duration for smoother effect
  };

  return (
    <div className="slideshow">
      <div className="slideshow-wrapper">
        <div className={`slide ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
          <div className="slide-text">
            <p>{slides[currentIndex]}</p>
          </div>
        </div>
        <button className="slideshow-control prev" onClick={goToPrevious}>&#10094;</button>
        <button className="slideshow-control next" onClick={goToNext}>&#10095;</button>
      </div>
      <div className="slideshow-dots">
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${currentIndex === idx ? 'active' : ''}`}
            onClick={() => {
              setIsTransitioning(true);
              setTimeout(() => {
                setCurrentIndex(idx);
                setIsTransitioning(false);
              }, 500); // Shorter fade duration for smoother effect
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;



