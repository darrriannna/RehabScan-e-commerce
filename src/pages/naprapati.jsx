import React from 'react';
import { Footer, Navbar } from "../components";
import '../styles/index.css';

const Naprapati = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Naprapati</h1>
        <hr />
        <div className="container">
          <p className="about-text">
          Naprapati är en manuell terapi, med händerna, och tillhör svensk hälso- och sjukvård. Med naprapati förebygger och behandlar man olika besvär och smärtor som främst är kopplade till olika rörelser. Har du ont i till exempel nacke, axlar och rygg kan du få behandling av oss i Göteborg. Du får ligga på en speciell behandlingsbänk där vi sen ger dig massage, töjer smärtande muskler, 
          trycker på olika punkter och behandlar dina leder.
          <p>Naprapater tillhör Sveriges största yrkeskår inom manuell medicin. Ordet ”naprapat” kommer från tjeckiska ordet ”napravit” som kan översättas till ”att korrigera”. En naprapat undersöker, diagnostiserar, behandlar och rehabiliterar smärta, stelhet och nedsatt funktion i det neuromuskuloskeletala systemet.

            På ren svenska kan man alltså säga att om du har besvär i kroppen så hjälper vi dig!</p>

          <p className='blue-text'>På Göteborgs NoPainKliniken behandlar vi bland annat:</p>
          <ul>
            <li>Spänningar och värk i nacke, axlar och muskler</li>
            <li>Nackspärr, tennisarmbåge, musarm</li>
            <li>Ont i ryggen som orsakas av att muskler och leder inte fungerar som de ska</li>
            <li>Olika idrottsskador</li>
            <li>Migrän, yrsel, domningar i armar och ben</li>
          </ul>
            <p>Nedan ser du en Naprapat i arbete och olika behandlingar vi utför här i Göteborg.</p> 
          </p>
        </div>
        <img className="card-img-top img-fluid" src="/assets/osteopathy-patoient-getting-tretment-massage.jpg" alt="" height={160} />
       
        </div>
      
      <Footer />
    </>
  );
}

export default Naprapati;
