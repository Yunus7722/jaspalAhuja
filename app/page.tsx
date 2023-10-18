import React from 'react';
import TopBar from './components/topbar/topbar';
import Footer from './components/Footer/Footer';
import Hero from './components/hero/hero';
import Achievements from './components/achievements/achievements';
import Gallery from './components/gallery/gallery';
import ContactUs from './components/contactUs/contactUs';

export default function Home() {
  return (
    <main>
      <TopBar /> {/* Include the TopBar component here */}
      <Hero/>
      <Achievements/>
      <Gallery/>
      <ContactUs/>
      <Footer/>
    </main>
  );
}
