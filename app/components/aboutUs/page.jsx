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
            <span style={{ marginLeft: "-1rem" }}>•</span> From his terrace
            overlooking the Taj Mahal&rsquo;s ethereal beauty, Jas Ahuja&rsquo;s creative
            spirit bloomed and blossomed into a poet and songwriter by 16,
            conquering the academic realm at IIT Roorkee with a degree in
            Mechanical Engineering. He then navigated the worlds of
            petrochemicals and corporate training, all while pursuing a Ph.D. in
            HR. But a thirst for deeper understanding & heeding the whispers of
            his heart, Jas embarked on a quest for alternative education,
            immersing himself in diverse philosophies and practices both within
            India and beyond. He explored wisdom from all corners of the globe,
            then built his own wonderland – an alternative school in Bangalore
            and a cafe that brews knowledge like the finest chai, testaments to
            his passion for holistic learning and connection. His
            entrepreneurial spirit found wings in successful Edtech ventures,
            where his leadership spearheaded record-breaking sales campaigns and
            brought him effortless abundance. Now, for nearly two decades, Jas
            has crafted a life woven from love, ultimate freedom, and purpose,
            living each day in harmony surrounded by those who resonate with his
            soul.{}
          </p>

          <p className="paraText-a">
            <span style={{ marginLeft: "-1rem" }}>• </span>
            Since the dawn of consciousness, Jas Ahuja has been on a sacred
            pilgrimage, a mission to seek truth, spread
            righteousness, and paint the world with a brush dipped in wisdom.
            This voyage has unearthed countless glittering gems of wisdom and
            yielded an abundance of profound insights. Along the way, encounters
            with enlightened masters, incredible mentors and solitary immersions
            in nature&rsquo;s mystical splendor and majestic glory, unearthed many
            life secrets that led to joy, beauty, and unshakeable peace, so
            deep, seems now it can&rsquo;t be ruffled by anything, big or small. Now,
            standing bathed in this transformative light, Jas is sharing this
            mind blowing understanding and guiding others towards wholeness &
            happiness through transformative trainings, one to one coaching,
            counseling, and Experiential retreats across the globe. They&rsquo;re like
            magic, but real, and happening all over the world. You are invited
            to partake in this journey of Transforming your life with Jas!
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default AboutUs;
