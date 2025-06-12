import React from "react";
import { Link } from "react-router-dom";
import "../styles/index.css";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 ">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
          
            <h5 className="pink">Hitta oss</h5>
            <p >HENRY DUNKERS PLATS 4, 252 67 Helsingborg</p>
        <p>070 783 29 29</p>

        <div>
        
          </div></div>
          <div className="col-md-6">
            <h5 className="pink">Kundservice</h5>
            <ul className="list-unstyled">
              <li><Link className="link-kontakt" to="/kontakta-oss">Kontakta oss</Link></li>
              
            </ul>
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;

