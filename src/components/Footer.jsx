import React from "react";
import { Link } from "react-router-dom";
import "../styles/index.css";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Information</h5>
            <ul className="list-unstyled">
              <li><Link to="/about">Om oss</Link></li>
              <li><Link to="/policy">Integritetspolicy</Link></li>
              
            </ul>
            <h4>Hitta oss</h4>
            <p >Karl Johansgatan 100, 414 55 Göteborg</p>
        <p>070-582 21 42</p>
        <p >
          <a className="link" href="mailto:drsorkhabi@nopainclinic.se">drsorkhabi@nopainclinic.se</a>
        </p>
        <div>
        
              <a href="https://www.instagram.com/nopainclinic.goteborg/" target="_blank" rel="noopener noreferrer">
                <img src="/assets/instagram-svgrepo-com.svg" alt="Instagram" />
              </a>
           <span>
              <a className="p-3" href="https://www.facebook.com/people/No-Pain-kliniken/61564085412748/" target="_blank" rel="noopener noreferrer">
                <img src="/assets/facebook-svgrepo-com.svg" alt="Facebook" />
              </a></span>
          </div></div>
          <div className="col-md-6">
            <h5>Kundservice</h5>
            <ul className="list-unstyled">
              <li><Link to="/contact">Kontakta oss</Link></li>
              
            </ul>
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;

