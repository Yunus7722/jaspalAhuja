import React from "react";
import TopBar from "./components/topbar/topbar";
import Footer from "./components/Footer/Footer";
import Hero from "./components/hero/hero";
import Achievements from "./components/achievements/achievements";
import Gallery from "./components/gallery/gallery";
import ContactUs from "./components/contactUs/contactUs";
import Retreat from "./components/retreat/retreat";
import Quotes from "./components/quotes/quotes";
import UpComingRetreats from "./components/upComingRetreats/upComingRetreats";

export default function Home() {
  return (
    <main>
      <TopBar /> {/* Include the TopBar component here */}
      <Hero />
      <Achievements />
      <UpComingRetreats />
      <Quotes />
      <Gallery />
      <Retreat />
      <ContactUs />
      <Footer />
    </main>
  );
}
