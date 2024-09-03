import React from 'react';

import { Navbar, Main, Footer, ReviewCarousel, SpecialistSection } from "../components";

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <ReviewCarousel/>
      <SpecialistSection/>
      <Footer />
    </>
  )
}

export default Home