import "./gallery.css";
import Image from "next/image";

import React from "react";
import GalleryData from "./galleryData";

import img1 from "../../img/jpo1.jpg";
import img2 from "../../img/jpo2.jpg";
import img3 from "../../img/ret6.jpg";
import img4 from "../../img/jpo4.jpg";
import img5 from "../../img/jpo5.jpg";
import img6 from "../../img/jpo6.jpg";

const Trip = () => {
  return (
    <div className="trip" id="Gallery">
      <h1 className="underline">Testimonials</h1>
      <p>you can discover new destinations from us</p>
      <div className="trip-card-container">
        <div className="t-card">
          <div className="t-image">
            <Image className="imageCont" src={img1} alt="firstImage" />
          </div>
          <h4>
            Normally I would have taken may be 20 years to pick up life changing
            insights which i learnt here in 2 days.
            <h4 style={{ color: "#c9184a" }}>Anna: Thiruannamalai</h4>
          </h4>
          {/* <p>{props.text}</p> */}
        </div>
        <div className="t-card">
          <div className="t-image">
            <Image className="imageCont" src={img2} alt="firstImage" />
          </div>
          <h4>
            Amazing Life Transforming Learnings & Strategies I am carrying back
            home to apply in daily life!
            <h4 style={{ color: "#c9184a" }}>Harpreet : Maldives</h4>
          </h4>
          {/* <p>{props.text}</p> */}
        </div>
        <div className="t-card">
          <div className="t-image">
            <Image className="imageCont" src={img3} alt="firstImage" />
          </div>
          <h4>
            The way Jas Ahuja made life and its all challenges look so trivial,
            I feel empowered, now anything is possible.
            <h4 style={{ color: "#c9184a" }}>Dinesh US : Bali Indonesia</h4>
          </h4>
          {/* <p>{props.text}</p> */}
        </div>
      </div>
      <div className="trip-card-container">
        <div className="t-card">
          <div className="t-image">
            <Image className="imageCont" src={img4} alt="firstImage" />
          </div>
          <h4>
            I have been a trainer myself for many years, learning with Jas Ahuja
            has been an effortless Transformational Experience
            <h4 style={{ color: "#c9184a" }}> Col. Ghosh, Bangalore</h4>
          </h4>
          {/* <p>{props.text}</p> */}
        </div>
        <div className="t-card">
          <div className="t-image">
            <Image className="imageCont" src={img5} alt="firstImage" />
          </div>
          <h4>
            What an amazing learning session, I suddenly feel myself a new
            Person who is capable Vauable and can accomplish anything...
            <h4 style={{ color: "#c9184a" }}> Joyce : Kerala</h4>
          </h4>
          {/* <p>{props.text}</p> */}
        </div>
        <div className="t-card">
          <div className="t-video">
            <iframe
              // width="350"
              // height="360"
              src="https://www.youtube.com/embed/VLpbfvZvE6s"
              title="Dance Movement Therapy  at one of the Retreats at Leela Palace Bangalore"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <h4>
            Problems and challenges in life I have been struggling and battling
            with suddenly seem to be disappearing as now I have moved from
            Peerception to Perspective
            <span style={{ color: "#c9184a" }}> Micky: Tamilnadu</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Trip;
