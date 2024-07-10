import React from "react";
import "../styles/index.css"; // Ensure to import the CSS file where we will define our styles

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-4">
        <div className="card bg-dark text-white border-0 mx-5">
          <img
            className="card-img img-fluid "
            src="./assets/main-banner-pic.jpg"
            alt="Card"
          />
          <div className="card-img-overlay d-flex align-items-center justify-content-center">
            <div className="container text-center">
              <h5 className="card-title fs-1 text ">Hitta enkelt rätt produkt här!</h5>
              <div className="search-bar-container">
                <form className="d-flex">
                  <select className="form-select me-2" aria-label="Category">
                    <option selected>Allt</option>
                    <option value="1">Knäskydd</option>
                    <option value="2">Axel/Nacke</option>
                    <option value="3">Hand & Handled</option>
                    <option value="4">Fot & Häl</option>
                    <option value="5">Ben</option>
                    <option value="6">Arm</option>
                  </select>
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-light" type="submit">Search</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="phone">
        <h1>Ring 0000000000 för personlig rådgivning av legitimerad naprapat</h1>
        </div>
      </div>
    </>
  );
};

export default Home;

