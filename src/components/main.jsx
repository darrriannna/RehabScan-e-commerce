import React from 'react';
import '../styles/index.css'; // Import your custom CSS file
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


const Home = () => {
  return (
    <div className="main">
 <div>
  <img className='banner-home' src="assets/Banner-home.png" alt="" />
 </div>
      <div className="container container-home-link">
        <h2 className="title-main">NO Pain Clinic - vård i världsklass</h2>
        <h3 className='sub-text'>
        På vår privata klinik i Göteborg erbjuder vi ortopediska tjänster för att möta dina hälsobehov.</h3>
        <div className="about-link">
          <Link to="/about" className='bold link'>
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
            <p className='simple-text'>- Nacke och ryggbesvär</p>
            <p className='simple-text'>- Diskbråck (Ländrygg eller Nacke) </p>
            <p className='simple-text'>- Kronisk och oförklarlig smärta</p>
            <p className='simple-text'>- Huvudvärk & migrän</p>
            <p className='simple-text'>- Axel- och armbågssmärta </p>
            <p className='simple-text'>- Höft/bäcken/knä smärta</p>
          </div>
          <NavLink to="https://nopainclinic.bestille.no/OnCust2/#!/" className="btn btn-info m-2 fs-5">
            <i></i>Boka tid 
          </NavLink>
        </div>
      </div>
    </div>
  

      <div className='container'>
  {/* New Container Section */}
  <div className="services-container">
    <div className="service-header">
      <h5 className='fw-bold '>Har du en privat sjukvårdsförsäkring?</h5>
      <div className="partners-link">
        <a href="/partners" className="partners-anchor">
          Partners <span className="arrow">→</span>
        </a>
      </div>
    </div>

      <div className="service-item">
        <i className="service-icon"></i>
        <div className="service-item-content">
          <h5>Ortoped specialist Läkare</h5>
          <p>Masoud Sorkhabi</p>
        </div>
        <div className="services-price">2000kr</div>
      </div>
    </div>
  </div>
</div>



  );
};

export default Home;
