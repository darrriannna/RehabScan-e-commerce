import React, { useState } from 'react';
import '../styles/index.css'; // Ensure this path is correct

const Slideshow = () => {
  const slides = [
    {
      src: '/assets/joyful-woman-dancing-blue-background.jpg',
      text: 'Välkommen till oss på Göteborgs NOPainKliniken!',
    },
    {
      src: '/assets/nurse-taking-care-patient.jpg',
      text: 'Vi har den bästa specialisten inom naprapati och ortopedi.',
    },
    {
      src: '/assets/closeup-medical-technician-starting-mri-scan-examination-patient-hospital.jpg',
      text: 'Vi erbjuder undersökningar med magnetkamera på ett snabbt och enkelt sätt.',
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToPrevious = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
      setIsTransitioning(false);
    }, 1000); // Duration of the fade transition
  };

  const goToNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      setIsTransitioning(false);
    }, 1000); // Duration of the fade transition
  };

  return (
    <div className="slideshow">
      <div className="slideshow-wrapper">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`slide ${currentIndex === idx ? 'active' : ''} ${isTransitioning ? 'fade-out' : 'fade-in'}`}
          >
            <img
              src={slide.src}
              className="slideshow-image"
              alt={`Slide ${idx + 1}`}
            />
            <div className="slide-text">
              <p>{slide.text}</p>
              {idx === slides.length - 1 && (
                <a href="pages/book-form.html" className="btn-slide">
                  Läs mer
                </a>
              )}
            </div>
          </div>
        ))}
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
              }, 1000); // Duration of the fade transition
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
