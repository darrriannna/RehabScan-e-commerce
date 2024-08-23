import React from 'react';
import { Footer, Navbar } from "../components";
import '../styles/index.css';

const Rehab = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center blue-text">Rehab</h1>
        <hr />
        <div className="container">
          <p className="about-text">
          På <span className='blue-small'>NoPainClinic</span>   erbjuder vi specialiserad rehabilitering för 
          att hjälpa dig återfå styrka, rörlighet och livskvalitet. Vårt team av erfarna naprapater och ortopeder arbetar tillsammans för att skapa en skräddarsydd behandlingsplan som passar dina individuella behov.</p>
            <div className='rehab-containers'>
            <div className='rehab-content box-1'>
                <img src="./assets/exercise_16127836.png" alt="stretching" />
                <p>Vi fokuserar på att behandla muskler och leder för att minska smärta och förbättra rörlighet. Genom en kombination av manuell terapi, stretchövningar och 
                    rådgivning hjälper vi dig att återhämta dig på ett effektivt sätt.</p>
            </div>
            <div className='rehab-content box-2'>
            <img src="./assets/dumbbell_9558737.png" alt="dumbbells" />
            <p>Vi erbjuder individuellt anpassade träningsprogram som kompletterar din rehabilitering. Dessa program är designade för att stärka kroppen och förhindra framtida skador.</p>
            </div>
            <div className='rehab-content box-3'>
            <img src="./assets/training_8326571.png" alt="stretching" />
            <p>Våra ortopeder hjälper dig med rehabilitering efter skador, operationer eller vid kroniska besvär som påverkar muskler och skelett. Vi använder oss av moderna tekniker och övningar för att återställa din fysiska funktion.</p>
            </div>
            </div>
          <p className='about-text'>

            <p >Ta det första steget mot ett smärtfritt och aktivt liv. Kontakta oss för att boka en tid eller för mer information om våra rehabiliteringstjänster. 
                Vi ser fram emot att hjälpa dig på din väg till återhämtning.</p>

          <p className='blue-text pt-4'>Varför Välja Oss?</p>
          <div className='container-naprapat-services'>
          <ul className='list-naprapat-services'>
            <li className='p-2'><span className='rehab-why'>Individuell Vård:</span> Varje patient är unik, och vi anpassar våra behandlingar efter dina specifika behov och mål.</li>
            <li className='p-2'><span className='rehab-why'>Erfarenhet och Kompetens:</span> Vårt team består av legitimerade naprapater och ortopeder med lång erfarenhet inom rehabilitering.</li>
            <li className='p-2'><span className='rehab-why'>Hela Vårdkedjan:</span> Från diagnos till behandling och uppföljning - vi finns med dig genom hela din rehabiliteringsresa.</li>
          </ul>
          </div>
          </p>
        </div>
        
        </div>
      
      <Footer />
    </>
  );
}

export default Rehab;