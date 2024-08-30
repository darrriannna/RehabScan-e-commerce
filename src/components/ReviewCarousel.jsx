import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/index.css';

const ReviewsCarousel = () => {
  const settings = {
    dots: true,         // Show navigation dots
    infinite: true,     // Enable infinite looping
    speed: 200,         // Transition speed
    slidesToShow: 1,    // Number of slides to show at once
    slidesToScroll: 1,  // Number of slides to scroll at once
    autoplay: true,     // Enable autoplay
    autoplaySpeed: 3000 // Autoplay speed in milliseconds
  };

  const reviews = [
    {
      name: "Anna Larsson",
      review: "Fantastiskt duktiga och hjälpsamma. Har fått fantastiskt hjälp flera gånger. Kan varmt rekommenderas.",
      rating: 5
    },
    {
      name: "Felicia Helgesson",
      review: "Quality treatments, will definitely come back.",
      rating: 5
    },
    {
      name: "Mattias Andersson",
      review: "Alltid fått den hjälp som behövs",
      rating: 4
    }
  ];

  return (
    <div className="reviews-carousel">
      <h2>Omdömen från våra patienter</h2>
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <p>"{review.review}"</p>
            <p>- {review.name}</p>
            <p>Betyg: {Array(review.rating).fill("⭐")}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewsCarousel;
