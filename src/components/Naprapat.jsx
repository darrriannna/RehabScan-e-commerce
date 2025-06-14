import React from 'react';
import '../styles/index.css';
import { useEffect } from "react";



const NaprapatSection = () => {useEffect(() => {
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
    <div className="naprapat-container">
      <img src="./assets/left.png" alt="Behandling vänster" className="naprapat-image animate-on-scroll" />
      
      <div className="naprapat-text-box animate-on-scroll">
        <h2>Besök hos<br />Legitimerad Naprapat</h2>
        <ul>
          <li>Ryggskott/nackspärr</li>
          <li>Ländrygg och nacksmärta</li>
          <li>Axel och höftsmärta</li>
          <li>Arbetsskador</li>
        </ul>
      </div>

      <img src="./assets/right.png" alt="Behandling höger" className="naprapat-image animate-on-scroll" />
    </div>
  );
};

export default NaprapatSection;
