import React from 'react';
import XcelerateNavbar from './components/XcelerateNavbar';
import Hero from './components/Hero';
import ChiefGuest from './components/ChiefGuest';
import About from './components/About';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';

function Xcelerate() {
  return (
    <div className="bg-finance-black min-h-screen text-white font-sans selection:bg-finance-green selection:text-black">
      <XcelerateNavbar />
      <Hero />
      <ChiefGuest />
      <About />
      <Timeline />
      <Gallery />
      <Sponsors />
      <Footer />
    </div>
  );
}

export default Xcelerate;
