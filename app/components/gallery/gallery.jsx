import "./gallery.css";
import Image from "next/image";

import React from "react";
import GalleryData from "./galleryData";

import img1 from "../../img/jpo1.jpg";
import img2 from "../../img/jpo2.jpg";
import img3 from "../../img/jpo3.jpg";
import img4 from "../../img/jpo4.jpg";
import img5 from "../../img/jpo5.jpg";
import img6 from "../../img/jpo6.jpg";

const Trip = () => {
  return (
    <div className="trip" id="Gallery">
      <h1 className="underline">Gallery</h1>
      <p>you can discover new destinations from us</p>
      <div className="trip-card-container">
        <div className="t-card">
          <div className="t-image">
            <Image className="imageCont" src={img1} alt="firstImage" />
          </div>
          {/* <h4>{props.heading}</h4> */}
          {/* <p>{props.text}</p> */}
        </div>
        <div className="t-card">
          <div className="t-image">
            <Image className="imageCont" src={img2} alt="firstImage" />
          </div>
          {/* <h4>{props.heading}</h4> */}
          {/* <p>{props.text}</p> */}
        </div>
        <div className="t-card">
          <div className="t-image">
            <Image className="imageCont" src={img3} alt="firstImage" />
          </div>
          {/* <h4>{props.heading}</h4> */}
          {/* <p>{props.text}</p> */}
        </div>
       
      </div>
      <div className="trip-card-container">
      <div className="t-card">
          <div className="t-image">
            <Image className="imageCont" src={img4} alt="firstImage" />
          </div>
          {/* <h4>{props.heading}</h4> */}
          {/* <p>{props.text}</p> */}
        </div>
        <div className="t-card">
          <div className="t-image">
            <Image className="imageCont" src={img5} alt="firstImage" />
          </div>
          {/* <h4>{props.heading}</h4> */}
          {/* <p>{props.text}</p> */}
        </div>
        <div className="t-card">
          <div className="t-image">
            <Image className="imageCont" src={img6} alt="firstImage" />
          </div>
          {/* <h4>{props.heading}</h4> */}
          {/* <p>{props.text}</p> */}
        </div>
        
      </div>
    </div>
  );
};

export default Trip;
