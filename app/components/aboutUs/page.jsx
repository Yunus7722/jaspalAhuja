"use client";
import React from "react";
import "./aboutUs.css";
import Footer from "../Footer/Footer";

function AboutUs() {
  return (
    <main>
      <div className="aboutUsmain-a">
        <div className="cardMain-a">
          {/* <div className="icon">
            <img src={isHovered1 ? ic1w : ic1w} alt="" />
          </div> */}
          <h2 className="headerText-a underline">About Us</h2>

          <p className="paraText-a">
            <span style={{ marginLeft: "-1rem" }}>•</span> Jas Ahuja grew up
            seeing Taj Mahal from his Terrace, as bright young man started
            writing poetry & Composing Songs while graduated from IIT Roorkee in
            Mech Engg. Worked as Petrochemical Engineer for 5 yrs & another 5
            yrs as HR corporate Trainer, while pursuing Ph D in HR insspired by
            inner calling & right Education, plunged into alternative education,
            worked & spent time with various Boarding Scools in India, Thailand,
            England, & then started Ones own Alternative School in Bangalore,
            and cafe wisdom! has also been part of Two Successful Edtech
            Start-ups.
          </p>
          <p className="paraText-a">
            <span style={{ marginLeft: "-1rem" }}>•</span> where than Travelled
            Across the Nation and carried out, out of the worl in Sales Feats!
          </p>
          <p className="paraText-a">
            <span style={{ marginLeft: "-1rem" }}>•</span> Created Reasonable
            wealth in just few first years of corrporate world & almost last two
            decades enjoying lifetime holiday, doing & living in daily life ,
            what i love to do, in effortless, timeless manner!
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default AboutUs;
