"use client";
import "./hero.css";
import { useState } from "react";
import imgDesign from "../../img/abstract2.png";
import imgPic from "../../img/ProfilePIcY.png";
import crown from "../../img/crown.png";
import thumbUp from "../../img/thumbup.png";
import glasses from "../../img/Pikachu.png";

import img1 from "../../img/jp2.jpg";
import img2 from "../../img/jp1.jpg";
import img3 from "../../img/jp3.jpg";
import img4 from "../../img/jp4.jpg";
import img5 from "../../img/jp5.jpg";
// import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { useContext } from "react";
// import {motion} from 'framer-motion'
// import { animated, useSpring } from '@react-spring/web'
import Image from "next/image";

import { useSpring, animated } from "react-spring";
import { Link } from "react-scroll";
import { useInView } from "react-intersection-observer";
import { Typewriter } from "react-simple-typewriter";

export default function Intro() {
  const [ref, inView] = useInView({ threshold: 0.5 });

  const props = useSpring({
    to: {
      opacity: inView ? 1 : 0,
      transform: inView ? "translateX(0)" : "translateX(-100%)",
    },
    config: { duration: 1000 },
  });

  const props2 = useSpring({
    to: {
      opacity: inView ? 1 : 0,
      transform: inView ? "translateX(0)" : "translateX(100%)",
    },
    config: { duration: 1000 },
  });

  const props3 = useSpring({
    to: {
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(100%)",
    },
    config: { duration: 1000 },
  });

  var str1 = "Jaspal Singh Ahuja";
  var str2 = "Jaspal Singh Ahuja";
  return (
    <div className="intro" id="Home">
      <div className="overlay"></div>

      <div className="i-left">
        <div className="i-name">
          <span>Hi i am </span>
          <span>
            {" "}
            <Typewriter
              words={[str1, str2]}
              loop={10}
              typeSpeed={50}
              deleteSpeed={30}
            />
          </span>

          <p>
            A graduate in Mech. Engg with honors from IIT Roorkee, India, is
            presently heading Sales & Training at My Cloud Forest, As an
            Investor, has been personally enjoying Financial freedom from last
            two decades, helps people to create Financial Freedom.
          </p>
        </div>
        <Link
          activeStyle={{
            // textDecoration: "none",
            // borderBottom: "4px solid #2a9d8f",
            fontWeight: 700,
            fontFamily: "Poppins, sans-serif",
          }}
          to="Contact"
          smooth={true}
          spy={true}
          activeClass="activeClass"
          offset={-window.innerHeight / 8}
        >
          <div className="button i-button">Get in touch</div>
        </Link>

        <div className="circular-image-rect">
          <Image
            src={img5}
            style={{ objectFit: "cover", objectPosition: "50% 25%" }}
            className="w-sec-circle"
            alt={""}
          />

          <Image
            src={img3}
            style={{ objectFit: "cover", objectPosition: "150% 50%" }}
            className="w-sec-circle"
            alt={""}
          />
          <Image
            src={img1}
            style={{ objectFit: "cover", objectPosition: "50% 25%" }}
            className="w-sec-circle"
            alt={""}
          />

          <Image
            src={img4}
            style={{ objectFit: "cover", objectPosition: "50% 25%" }}
            className="w-sec-circle"
            alt={""}
          />
          {/* <div className="w-sec-circle">
            <Image src={img5} alt="" />
          </div> */}
        </div>

        <div className="i-icons">
          <a
            style={{ textDecoration: "none", color: "inherit" }}
            href="https://github.com/Yunus7722"
          >
            {" "}
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            style={{ textDecoration: "none", color: "inherit" }}
            href="https://www.linkedin.com/in/mohammed-yunus-8157a1218/"
          >
            {" "}
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            style={{ textDecoration: "none", color: "inherit" }}
            href="https://www.linkedin.com/in/mohammed-yunus-8157a1218/"
          >
            {" "}
            <i className="fa-brands fa-square-instagram"></i>
          </a>
        </div>
      </div>
      <div className="i-right">
        {/* <Image style={{ width: "100%", height: 600 }} src={imgDesign} alt="" /> */}
        {/* <Image src={imgPic} alt="" /> */}
        {/* <div className="pikaCont"> */}
        {/* <Image
          className="pikachuImg"
          style={{ width: "70%", height: 400, top: "20%", left: "-80%" }}
          src={glasses}
          alt=""
        /> */}

        <Image
          src={img2}
          style={{ objectFit: "cover", objectPosition: "50% 25%" }}
          className="w-main-circle"
          alt={""}
        />

        {/* </div> */}
        <animated.div
          className="floating-div"
          ref={ref}
          style={{ top: "80%", left: "12%", ...props }}
        >
          {/* <FloatingDiv image={crown} txt1="Web" txt2="Developer" /> */}
        </animated.div>
        <animated.div
          className="floating-div"
          style={{ top: "40%", left: "75%", ...props2 }}
        >
          {/* <FloatingDiv image={thumbUp} txt1="Android" txt2="Developer" /> */}
        </animated.div>
        {/* blur divs */}
        {/* <div className="blur"></div>
        <div
          style={{ background: "#c1f5ff", top: "50%", left: "-25%" }}
          className="blur"
        ></div> */}
      </div>
    </div>
  );
}
