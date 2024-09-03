import React from 'react';
import '../styles/index.css'; // Ensure this path is correct

const specialists = [

  {
    name: 'Dr. Masoud Sorkhabi',
    title: 'Ortopedkirurg',
    image: '/assets/Masoud-img.jpeg',
    description: (
        <div>
          <ul className='specialist-services-list'>
            <li className='specialist-services-item'>
              <img className='plus' src="/assets/plus-svgrepo-com.svg" alt="plus" />
              Erbjuder facettled och rotblockader under genomlysning.
            </li>
            <li className='specialist-services-item'>
              <img className='plus' src="/assets/plus-svgrepo-com.svg" alt="plus" />
              SI-ledsblock.
            </li>
            <li className='specialist-services-item'>
              <img className='plus' src="/assets/plus-svgrepo-com.svg" alt="plus" />
              Diagnostisera källan till smärtan.
            </li>
            <li className='specialist-services-item'>
              <img className='plus' src="/assets/plus-svgrepo-com.svg" alt="plus" />
              Ställningstagande till operation eller konservativ behandling.
            </li>
            <li className='specialist-services-item'>
              <img className='plus' src="/assets/plus-svgrepo-com.svg" alt="plus" />
              Test blockad.
            </li>
            <li className='specialist-services-item'>
              <img className='plus' src="/assets/plus-svgrepo-com.svg" alt="plus" />
              Botox.
            </li>
          </ul>
        </div>
      )
  }
];

const SpecialistSection = () => {
  return (
    <div className="specialist-section">
      <h2>Möt Våra Specialister</h2>
      <div className="specialist-cards">
        {specialists.map((specialist, index) => (
          <div key={index} className="specialist-card">
            <div className="card-inner">
              <div className="card-front">
                <img src={specialist.image} alt={`${specialist.name}`} className="specialist-image" />
                <h1>{specialist.name}</h1>
                <h3>{specialist.title}</h3>
              </div>
              <div className="card-back">
                <p>{specialist.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialistSection;
