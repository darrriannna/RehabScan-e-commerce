import React from 'react';
import { Footer, Navbar } from "../components";
import '../styles/index.css';

const Ortopedi = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center blue-text">Specialistläkare inom ortopedi och rygg kirurgi</h1>
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
           <p className='blue-text p-3 text-center'>BEHANDLINGAR</p>
           <div className='container container-list-beh'>
          <ul className=' list-ort-beh'>
            <li className='li-el-beh'> <img className='plus' src="/assets/plus-svgrepo-com.svg" alt="plus" />Erbjuder facettled och rotblockader under genomlysning.</li> 
            <li className='li-el-beh'><img className='plus' src="/assets/plus-svgrepo-com.svg" alt="plus" />SI-ledsblock.</li>
            <li className='li-el-beh'><img className='plus' src="/assets/plus-svgrepo-com.svg" alt="plus" />Diagnostisera källan till smärtan.</li>
            <li className='li-el-beh'><img className='plus' src="/assets/plus-svgrepo-com.svg" alt="plus" />Ställningstagande till operation eller konservativ behandling</li>
            <li className='li-el-beh'><img className='plus' src="/assets/plus-svgrepo-com.svg" alt="plus" />Test blockad </li>
            <li className='li-el-beh'><img className='plus' src="/assets/plus-svgrepo-com.svg" alt="plus" />Botox  </li>
          </ul></div>
          <div className='about-text-container'>
       <p className="about-text pt-4">
        Som specialist inom ortopedi och ryggkirurgi erbjuder vi en noggrann bedömning för att identifiera källan till dina besvär. 
        Genom avancerade undersökningsmetoder och en detaljerad granskning av dina röntgenbilder, kan vi fastställa orsaken till dina problem. 
        </p> 
        <p className='about-text'>Efter en grundlig utredning får du en individanpassad behandlingsplan, utformad för att ge dig bästa möjliga resultat och hjälpa dig att återfå din livskvalitet.
        </p>
        <p className='about-text pb-4'>Låt oss hjälpa dig att bli fri från smärta och återgå till ett aktivt liv. </p>
 </div> <div>
    <div></div>
  </div>
  <div className="masoud-cv">
    <img src="/assets/masoud-img.png.png" alt="cv img" />
    <div className="text-content">
        <h2>Dr Masoud Sorkhabi</h2>
        <h5 className="italic">Specialistläkare inom ortopedi och rygg kirurgi</h5>
        <a className='link' href="mailto:drsorkhabi@nopainclinic.se">drsorkhabi@nopainclinic.se</a>
        <div>
            <h5 className="bold pt-4">Utbildning</h5> 
            <p className='bold'>Göteborgs Universitet</p>
            <p className="italic">läkarlinjen 1989 - 1995</p>
        </div>
        <div>
            <h5 className="bold">Tidigare uppdrag</h5>
            <p className="bold">Sahlgrenska ryggsektionen</p>
            <p className='italic'>fellowship ryggsektionen 2008-2009.</p>
            <p className="bold">Boras lasarett</p>
            <p className='italic'>Överläkare tjänst 2005. ST- ortopedi 1999-2002:Specialist.</p>
            <p className='italic'>Ortoped examen 2003 Bakjour barn o vuxenortopedi.</p>
            <p className="bold">Sundsvall sjukhus</p>
            <p className='italic'>2 ar ST-Ortopeden 1997-1999, AT- läkare 1995-1997.</p>
        </div>
    </div>
</div>

        </div>
        <div><p className='blue-text text-center'>Boka en konsultation idag för en professionell bedömning och behandlingsplan.</p></div>

      
        </div>
      
      <Footer />
    </>
  );
}

export default Ortopedi;