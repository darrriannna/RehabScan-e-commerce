import React from 'react';
import '../styles/index.css';

const NaprapatSection = () => {
  return (
    <div className="naprapat-container">
      <img src="./assets/left.png" alt="Behandling vänster" className="naprapat-image" />
      
      <div className="naprapat-text-box">
        <h2>Besök hos<br />Legitimerad Naprapat</h2>
        <ul>
          <li>Sport skador</li>
          <li>Ländrygg och nacksmärta</li>
          <li>Axel och höftsmärta</li>
          <li>Arbetsskador</li>
        </ul>
      </div>

      <img src="./assets/right.png" alt="Behandling höger" className="naprapat-image" />
    </div>
  );
};

export default NaprapatSection;
