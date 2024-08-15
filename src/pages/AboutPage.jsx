import React from 'react';
import { Footer, Navbar } from "../components";
import { Link } from 'react-router-dom';
import '../styles/index.css';

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Om oss</h1>
        <hr />
        <div className="container">
          <p className="about-text">
            Vår vision är att leverera rätt och snabb behandling med professionell, hög och bred kompetens under samma tak med patientens hela hälsa i fokus för att förbättra och bibehålla god livskvalitet.
          </p>
        </div>
        
        <div className="row">
          <Link to="/Naprapati" className="col-md-3 col-sm-6 mb-3 px-3 text-decoration-none">
            <div className="card h-100 card-container">
              <img className="card-img-top img-fluid" src="/assets/osteopathy-patoient-getting-tretment-massage.jpg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Naprapat</h5>
              </div>
            </div>
          </Link>
          <Link to="/Ortopedi" className="col-md-3 col-sm-6 mb-3 px-3 text-decoration-none">
            <div className="card h-100 card-container">
              <img className="card-img-top img-fluid" src="/assets/front-view-doctor-explaining-anatomy.jpg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Ortoped</h5>
              </div>
            </div>
          </Link>
          <Link to="/mri" className="col-md-3 col-sm-6 mb-3 px-3 text-decoration-none">
            <div className="card h-100 card-container">
              <img className="card-img-top img-fluid" src="/assets/doctor-getting-patient-ready-ct-scan.jpg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">MRI intygg</h5>
              </div>
            </div>
          </Link>
          <Link to="/rehab" className="col-md-3 col-sm-6 mb-3 px-3 text-decoration-none">
            <div className="card h-100 card-container">
              <img className="card-img-top img-fluid" src="/assets/woman-doing-fitness-exercises-gym-holding-massage-foam-roller.jpg" alt="" height={180} />
              <div className="card-body">
                <h5 className="card-title text-center">Rehab</h5>
              </div>
            </div>
          </Link>
        </div>

        {/* How to Find Us Section */}
        <div className="container my-3 py-3">
          <h2 className="text-center">Hitta hit</h2>
          <hr />
          <div className="row">
            <h4 className='text-center p-3'>Vi finns på Karl Johansgatan 100, 414 55 Göteborg</h4>
            <div className="col-md-12">
              <div className="map-container">
                <iframe
                  title="Google Maps Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.453840212694!2d11.97523081532602!3d57.71984867530073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ffb7e8d23a74b%3A0xe8c4a30c1a0b4b!2sKarl%20Johansgatan%20100%2C%20414%2055%20G%C3%B6teborg!5e0!3m2!1sen!2sse!4v1691565371432!5m2!1sen!2sse"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutPage;
