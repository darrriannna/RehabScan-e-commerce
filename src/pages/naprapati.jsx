import React from 'react';
import { Footer, Navbar } from "../components";
import '../styles/index.css';

const Naprapati = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center blue-text">Naprapati</h1>
        <hr />
        <div className="container">
          <p className="about-text">
          <span className='blue-small'>Naprapati</span> är en manuell terapi, med händerna, och tillhör svensk hälso- och sjukvård. Med naprapati förebygger och behandlar man olika besvär och smärtor som främst är kopplade till olika rörelser. Har du ont i till exempel nacke, axlar och rygg kan du få behandling av oss i Göteborg. Du får ligga på en speciell behandlingsbänk där vi sen ger dig massage, töjer smärtande muskler, 
          trycker på olika punkter och behandlar dina leder.</p>
          <p className='about-text'>Naprapater tillhör Sveriges största yrkeskår inom manuell medicin. Ordet ”naprapat” kommer från tjeckiska ordet ”napravit” som kan översättas till ”att korrigera”. En naprapat undersöker, diagnostiserar, behandlar och rehabiliterar smärta, stelhet och nedsatt funktion i det neuromuskuloskeletala systemet.

            <p >På ren svenska kan man alltså säga att om du har besvär i kroppen så hjälper vi dig!</p>

          <p className='blue-text pt-4'>På Göteborgs NoPainClinic behandlar vi bland annat:</p>
          <div className='container-naprapat-services'>
          <ul className='list-naprapat-services'>
            <li className='p-2'>Spänningar och värk i nacke, axlar och muskler</li>
            <li className='p-2'>Nackspärr, tennisarmbåge, musarm</li>
            <li className='p-2'>Ont i ryggen som orsakas av att muskler och leder inte fungerar som de ska</li>
            <li className='p-2'>Olika idrottsskador</li>
            <li className='p-2'>Migrän, yrsel, domningar i armar och ben</li>
          </ul>
          </div>
          </p>
        </div>
        
        </div>
      
      <Footer />
    </>
  );
}

export default Naprapati;
