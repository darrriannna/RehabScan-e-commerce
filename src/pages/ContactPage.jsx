import React from "react";
import { Footer, Navbar } from "../components";
import "../styles/index.css";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="container container-contact my-3 py-3 page-wrapper">
        <h1 className="text-center blue-text">HÄR FINNS VI</h1>
        <hr />
        <p className="text-center">HENRY DUNKERS PLATS 4, 252 67 Helsingborg</p>
        <p className="text-center">070 783 29 29</p>
        <p className="text-center">
          <a href="mailto:aktivfysio.naprapat@gmail.com">aktivfysio.naprapat@gmail.com</a>
        </p>
        <p className="mx-auto text-center">
          Tidsbokning gör du själv här på hemsidan eller ringer. Tala gärna in
          ett meddelande om vi inte har möjlighet att svara, så ringer vi upp
          så fort vi kan. Maila oss gärna om du har några frågor.
        </p>
        <h4 className="text-center">Ej/sent avbokad tid debiteras. Vänligen avboka senast dagen innan! </h4>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;

