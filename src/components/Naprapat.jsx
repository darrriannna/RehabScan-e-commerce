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

      <div className="naprapat-text-box box-1 animate-on-scroll">
        <h2>Vänligen avboka senast 24 timmar innan ditt bokade besök för att undvika debitering.</h2>
       <p>För att avboka tid maila till aktivfysio.naprapat@gmail.com</p>
      </div>
    </div>
  );
};

export default NaprapatSection;
