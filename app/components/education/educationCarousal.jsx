"use client";
import "./educationCarousal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleStop } from "@fortawesome/free-solid-svg-icons";
import { FacebookShareButton, FacebookIcon } from "next-share";

import img1 from "../../img/ayur2mod.png";
import img2 from "../../img/yog4mod.png";
import img3 from "../../img/health1main.png";
import img4 from "../../img/health3mod.png";
import img5 from "../../img/lifemod.png";
import img6 from "../../img/medi1mod.png";
import img7 from "../../img/yog5mod.png";
import img8 from "../../img/yog6mod.png";
import img9 from "../../img/yog7mod.png";
import Image from "next/image";

export default function EducationCarousal() {
  return (
    <div className="footer-c">
      {/* <div className="topRow-footer-c">
        <div>
          <h1>Jas Ahuja</h1>
        </div>
        <div className="iconCont-c">
          <a target="_blank" href="https://www.linkedin.com/in/jaspal-singh-ahuja-a60b6612/">
            {" "}
            <i className="fi fi-brands-linkedin"></i>
          </a>

          <a target="_blank" href="https://www.facebook.com/jas.love.357?mibextid=ZbWKwL"><i className="fi fi-brands-facebook"></i></a>
          <a target="_blank" href="https://instagram.com/jaspal_sir?igshid=MzRlODBiNWFlZA=="><i className="fi fi-brands-instagram"></i></a>
        </div>
      </div> */}
      <div className="bottomRow-footer-c">
        <Image className="carousal-image-c" src={img1} alt={""} />
        <Image className="carousal-image-c" src={img2} alt={""} />
        {/* <div className="gap-y-10"></div> */}
        {/* <Image className="carousal-image-c"  src={img3} alt={""} /> */}
        <div className="e-card">
          <h4>Venue</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem,
            iusto? Eligendi dolorem architecto officiis soluta cumque a,
            obcaecati neque hic exercitationem voluptatem perspiciatis ad id
            ratione quaerat odio debitis! Vero!Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Sit saepe quis pariatur veritatis
          </p>
        </div>

        {/* <Image className="carousal-image-c"  src={img7} alt={""} />
        <Image className="carousal-image-c"  src={img8} alt={""} />
        <Image className="carousal-image-c"  src={img9} alt={""} /> */}
      </div>
      <div className="divider"></div>
      <div className="bottomRow-footer-c">
        {/* <Image className="carousal-image-c" src={img4} alt={""} /> */}
        
        <Image className="carousal-image-c" src={img5} alt={""} />
        <div className="e-card">
          <h4>Venue</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem,
            iusto? Eligendi dolorem architecto officiis soluta cumque a,
            obcaecati neque hic exercitationem voluptatem perspiciatis ad id
            ratione quaerat odio debitis! Vero!Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Sit saepe quis pariatur veritatis
          </p>
        </div>
        <Image className="carousal-image-c" src={img6} alt={""} />
      </div>
    </div>
  );
}
