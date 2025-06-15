import React from 'react';
import '../styles/index.css';

const Prices = () => {
  return (
    <div className="prices-section">
      <h2>Priser</h2>
      <ul className="price-list">
        <li>
          <span>Nybesök</span>
          <span>800 kr</span>
        </li>
        <li>
          <span>Återbesök</span>
          <span>750 kr</span>
        </li>
        
      </ul>
    </div>
  );
};

export default Prices;
