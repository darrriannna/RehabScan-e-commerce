import React from 'react';
import { NavLink } from 'react-router-dom';
import Banner from './Banner'; // Import the Banner component
import '../styles/index.css'; // Import your CSS

const Navbar = () => {
    return (
        <>
            <Banner />
            <nav className="navbar navbar-expand-lg navbar-light bg-light p-3 sticky-top">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/">
                        <img src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt="Logo" className='logo-nav' />
                    </NavLink>
                    
                    {/* Boka tid button for small screens */}
                    <div className="d-lg-none bokatid-wrapper">
                        <NavLink to="https://nopainclinic.bestille.no/OnCust2/#!/" className="btn btn-info bokatid-button"><i></i>Boka tid</NavLink>
                    </div>
                    
                    <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto my-2 text-center">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Hem</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">Om oss</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/ortopedi">Ortopedi</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Kontakta oss</NavLink>
                            </li>
                        </ul>
                        <div className="buttons text-center d-none d-lg-block">
                            <NavLink to="https://nopainclinic.bestille.no/OnCust2/#!/" className="btn-book"><i></i>Boka tid</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;



