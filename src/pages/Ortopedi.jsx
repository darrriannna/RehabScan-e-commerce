import React from 'react';
import { Footer, Navbar } from "../components";
import '../styles/index.css';

const Ortopedi = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center blue-text">Ortopedi</h1>
        <hr />
        <div className="container">
          
          <div className='container-ortoped-services'>
          <ul className='list-ortoped-services'>
            <li className='p-2 li-ort'> <img className='icon-ortopedi' src="/assets/pain_3736120.png" alt="pain-icon" />Lider du av långvariga rygg& nackbesvär, med eller utan smärta?</li>
            <li className='p-2 li-ort'> <img className='icon-ortopedi' src="/assets/bone-pain_8752366.png" alt="bone"/> Är du opererad men fortsätter att ha besvär? </li>
            <li className='p-2 li-ort'><img className='icon-ortopedi' src="/assets/health_2634148.png" alt="problem"/>Har du återkommande problem som påverkar din vardag?  </li>
            <li className='p-2 li-ort'><img className='icon-ortopedi' src="/assets/rehabilitation_9600892.png" alt="rehab"/>Vill du veta orsaken och hur du kan bli bättre?</li>
          </ul>
          </div>
       <p className="about-text">
        Som specialist inom ortopedi och ryggkirurgi erbjuder vi en noggrann bedömning för att identifiera källan till dina besvär. 
        Genom avancerade undersökningsmetoder och en detaljerad granskning av dina röntgenbilder, kan vi fastställa orsaken till dina problem. Med hjälp av diagnostiska blockader, 
       där lokalbedövning används, kan vi snabbt avgöra om du svarar positivt på behandlingen. Om du upplever minst 70% förbättring inom 10 minuter kan en mer långsiktig behandling erbjudas.
        </p> 
        <p className='about-text'>Efter en grundlig utredning får du en individanpassad behandlingsplan, utformad för att ge dig bästa möjliga resultat och hjälpa dig att återfå din livskvalitet.
        </p>
        <p className='about-text'>Låt oss hjälpa dig att bli fri från smärta och återgå till ett aktivt liv. </p>
  <div>
    <div><p className='blue-text text-center'>Boka en konsultation idag för en professionell bedömning och behandlingsplan.</p></div>
    <div></div>
  </div>

        </div>
      
        </div>
      
      <Footer />
    </>
  );
}

export default Ortopedi;