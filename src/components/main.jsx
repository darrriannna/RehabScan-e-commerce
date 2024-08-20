import React from 'react';
import '../styles/index.css'; // Import your custom CSS file
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Slideshow from './HomeSlide';

const Home = () => {
  return (
    <div className="main">
      <Slideshow />

      <div className="container">
        <h2 className="title-main">NO Pain Kliniken - vård i världsklass</h2>
        <h3>
        På vår privata klinik i Göteborg erbjuder vi naprapati och ortopediska tjänster för att möta dina hälsobehov.</h3>
        <div className="about-link">
          <Link to="/about" className='blue-small'>
            Läs mer <span className="about-arrow">→</span>
          </Link>
        </div>
      </div>

          <div className='container'>
      <div className='container-main-book'>
        <img className='image-main' src="/assets/close-up-physiotherapist-massaging-patient.jpg" alt="min-home-books" />
        <div className='content-right'>
          <div className='col treatments'>
            <h2>Har du ...</h2>
            <p>- Nacke och ryggbesvär</p>
            <p>- Diskbråck (Ländrygg eller Nacke) </p>
            <p>- Kronisk och oförklarlig smärta</p>
            <p>- Huvudvärk & migrän</p>
            <p>- Axel- och armbågssmärta </p>
            <p>- Höft/bäcken/knä smärta</p>
            <h2>?</h2>
          </div>
          <NavLink to="*" className="btn btn-info m-2 fs-5">
            <i></i>Boka tid 
          </NavLink>
        </div>
      </div>
    </div>
  
        <p className='blue-text p-3 text-center'>BEHANDLINGAR</p>
        <div className='container'>
        <div className="row">
          <Link to="/naprapati" className="col-md-4 col-sm-6 mb-3 px-3 text-decoration-none">
            <div className="card h-100 card-container-main">
              
              <div className="card-body">
                <h5 className="card-title-main text-center">Naprapat</h5>
                <img className="icons-main" src="/assets/physiotherapist_17566176.png" alt="naprapat" />
              </div>
            </div>
          </Link>
          <Link to="/ortopedi" className="col-md-4 col-sm-6 mb-3 px-3 text-decoration-none">
            <div className="card h-100 card-container-main">

              <div className="card-body">
                <h5 className="card-title-main text-center ">Ortoped</h5>
                <img className="icons-main" src="/assets/back-pain_4986182.png" alt="ortoped" />
              </div>
            </div>
          </Link>
          <Link to="/rehab" className="col-md-4 col-sm-6 mb-3 px-3 text-decoration-none">
            <div className="card h-100 card-container-main">
              <div className="card-body">
                <h5 className="card-title-main text-center ">Rehab</h5>
                <img className="icons-main" src="/assets/healthy_7757744.png" alt="rehab" />

              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className='container'>
        {/* New Container Section */}
        <div className="services-container row">
          <div className="col-md-6">
            <h2 className='title-services'>Har du en privat sjukvårdsförsäkring?</h2>
            <div className="partners-link">
          <a href="/partners" className="partners-anchor">
            Partners <span className="arrow">→</span>
          </a>
        </div>
          </div>
          <div className="col-md-6">
            <div className="services-list">
              <div className="service-item">
                <i className="service-icon"></i>
                <div>
                  <h5>Naprapatbesök</h5>
                  <p>Naprapatbehandling 750kr</p>
                </div>
              </div>
              <div className="service-item">
                <i className="service-icon"></i>
                <div>
                  <h5>Läkarbesök</h5>
                  <p> 1300 kr</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
