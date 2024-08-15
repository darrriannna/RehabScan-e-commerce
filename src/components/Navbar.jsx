import React from 'react';
import { NavLink } from 'react-router-dom';
import Banner from './Banner'; // Import the Banner component

const Navbar = () => {

    


    return (
        <>
            <Banner />
            <nav className="navbar navbar-expand-lg navbar-light bg-light p-3 sticky-top ">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/"> 
                        <img src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt="Logo" style={{ height: '80px' }} />
                    </NavLink>
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
                                <NavLink className="nav-link" to="/naprapati">Naprapati</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Kontakta oss</NavLink>
                            </li>
                        </ul>
                        <div className="buttons text-center">
                            <NavLink to="*" className="btn btn-info m-2 fs-5"><i></i>Boka tid </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;

