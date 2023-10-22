import "./gallery.css";
import Image from "next/image";

import React from "react";
import GalleryData from "./galleryData";

import img1 from "../../img/jpo1.jpg";
import img2 from "../../img/jpo2.jpg";
import img3 from "../../img/ret6.jpg";
import img4 from "../../img/jpo4.jpg";
import img5 from "../../img/jpo5.jpg";
import img6 from "../../img/ret3.jpg";

const Trip = () => {
  return (
    <div className="trip" id="Gallery">
      <h1 className="underline">Testimonials</h1>
      {/* <p>you can discover new destinations from us</p> */}
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
          <div className="t-image">
            <Image className="imageCont" src={img6} alt="firstImage" />
          </div>
          <h4>
            I had the opportunity to attend a life-changing learning session
            that left me feeling rejuvenated and inspired.
            <h4 style={{ color: "#c9184a" }}> Priya : Trivandrum</h4>
          </h4>
          {/* <p>{props.text}</p> */}
        </div>
      </div>
      <div className="trip-card-container">
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
            Problems and challenges in life I have been struggling 
            with suddenly seem to be disappearing as I have moved from
            Perception to Perspective
            <h4 style={{ color: "#c9184a" }}> Micky: Tamilnadu</h4>
          </h4>
        </div>
        <div className="t-card">
          <div className="t-video">
            <iframe
              width="640"
              height="360"
              src="https://www.youtube.com/embed/cs_27BTlvfw"
              title="2 minutes spiritual journey"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <h4>
            Embarking on a spiritual journey has been a profound experience.I
            have learned to embrace lifes mysteries and find harmony in the
            universe.
            <h4 style={{ color: "#c9184a" }}> Prajwal : Assam </h4>
          </h4>
        </div>
        <div className="t-card">
          <div className="t-video">
            <iframe
              width="320"
              height="560"
              src="https://www.youtube.com/embed/okdGqBSHEB4"
              title="Yet another Jas Ahuja&#39;s Total Transformation Retreat, bonfire session..."
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <h4>
            Bonfires often create a wonderful atmosphere for bonding and
            creating lasting memories which we wont regret till our last
            breath..
            <h4 style={{ color: "#c9184a" }}> James : Goa </h4>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Trip;
