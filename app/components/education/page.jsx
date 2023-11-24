"use client";
import "./education.css";
import { useEffect, useState } from "react";
import imgDesign from "../../img/abstract2.png";
import imgPic from "../../img/ProfilePIcY.png";
import crown from "../../img/crown.png";
import thumbUp from "../../img/thumbup.png";
import glasses from "../../img/Pikachu.png";

import img1 from "../../img/edu2.png";
import img2 from "../../img/yog3.jpeg";
import img3 from "../../img/ret5.jpg";
import img4 from "../../img/italy.jpg";
import img5 from "../../img/ret4.jpg";
import mal from "../../img/jpo2.jpg";
// import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { useContext } from "react";
// import {motion} from 'framer-motion'
// import { animated, useSpring } from '@react-spring/web'
import Image from "next/image";

import EducationCarousal from './educationCarousal'

import { useSpring, animated } from "react-spring";
import { Link as ScrollLink } from "react-scroll";
import { useInView } from "react-intersection-observer";
import { Typewriter } from "react-simple-typewriter";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";

import Link from "next/link";

export default function Education() {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");

  function onCloseModal() {
    setOpenModal(false);
    setEmail("");
  }

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

  const [windowHeight, setWindowHeight] = useState(0);

  const updateWindowHeight = () => {
    if (typeof window !== "undefined") {
      setWindowHeight(window.innerHeight);
    }
  };

  useEffect(() => {
    updateWindowHeight();
    window.addEventListener("resize", updateWindowHeight); // Update window height on resize

    return () => {
      window.removeEventListener("resize", updateWindowHeight); // Clean up the event listener
    };
  }, []);

  var str1 = "Jaspal Singh Ahuja";
  var str2 = "Jaspal Singh Ahuja";
  return (
    <main>
      <div className="intro-e" id="Home">
        <a
          href="https://wa.me/+919844290460?text=Hi%20Jas%20Ahuja%20let's%20Discuss"
          className="floating-e"
          target="_blank"
        >
          <i className="fi fi-brands-whatsapp"></i>
        </a>
        {/* <Link href="/components/products">
        <div className="product-float-e">
          <div className="product-float-text-e">Our Products</div>
        </div>
      </Link> */}
        <div className="overlay-e"></div>

        <div className="i-left-e">
          <div className="i-name-e">
            <span></span>
            <span>
              Jas Ahuja{" "}
              <span
                style={{ fontSize: 22, color: "#c9184a", fontWeight: "800" }}
              >
                Education Coach
              </span>
              {/* {" "} */}
              {/* <Typewriter
              words={[str1, str2]}
              loop={10}
              typeSpeed={50}
              deleteSpeed={30}
            /> */}
            </span>

            <p>
              {/* <b style={{ fontWeight: "600", color: "black" }}>
             
            </b> */}
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloremque incidunt velit veniam provident assumenda temporibus
                nisi earum voluptatibus! Aspernatur rem quo consequuntur natus.
                Odio sapiente fugiat assumenda repellendus eaque numquam.
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit esse, non totam, facilis officia animi porro provident
                  magnam ut, repudiandae corporis neque fugiat obcaecati quod
                  aperiam quisquam incidunt! Odio, porro. Lorem ipsum dolor sit,
                  amet consectetur adipisicing elit. Obcaecati est, reiciendis
                  eum deserunt aspernatur sed, sunt voluptate ea fugit nesciunt
                  culpa deleniti officia modi quis enim dolores assumenda harum
                  ex.
                  {/* <Link href="/components/aboutUs">
                  {" "}
                  <span
                    style={{
                      color: "#F5DEB3",
                      fontWeight: "800",
                      fontSize: "14px",
                      cursor: "pointer",
                    }}
                  >
                    &nbsp;&nbsp;&nbsp;...read more
                  </span>
                </Link>{" "} */}
                </p>
              </p>
            </p>
          </div>
          <div className="divider"></div>

          <div className="circular-image-rect-e">
            <div className="cardMain-e">
              <h2 className="headerText-e">Yoga Jas Certified</h2>
            </div>
            <div className="cardMain-e">
              <h2 className="headerText-e">Yoga Jas Certified</h2>
            </div>
            <div className="cardMain-e">
              <h2 className="headerText-e">Yoga Jas Certified</h2>
            </div>
            <div className="cardMain-e">
              <h2 className="headerText-e">Yoga Jas Certified</h2>
            </div>
          </div>

          <div className="divider"></div>

          <div className="add-container-e">
            <ScrollLink
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
              offset={-windowHeight / 8}
            >
              <div className="button i-button">Explore more</div>
            </ScrollLink>
            {/* <ScrollLink
            activeStyle={{
              // textDecoration: "none",
              // borderBottom: "4px solid #2a9d8f",
              fontWeight: 700,
              fontFamily: "Poppins, sans-serif",
            }}
            to="upComingEvents"
            smooth={true}
            spy={true}
            activeClass="activeClass"
            offset={-windowHeight / 8}
          >
            <div className="burst-container-e">
              <div className="burst-12-e"></div>
              <div className="static-content-e">View Upcoming Events</div>
            </div>
          </ScrollLink> */}

            {/* <div onClick={() => setOpenModal(true)} className="burst-container-e">
            <div className="burst-12-e"></div>
            <div className="static-content-e -ml-1">
              &nbsp;&nbsp;&nbsp;1 - 1&nbsp; &nbsp;&nbsp;Life &nbsp;Coaching
            </div>
          </div> */}
          </div>

          {/* <div
          className=""
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "5rem",
            marginLeft: "1.4rem",
            marginTop: "-1rem",
            color: "wheat",
            fontWeight: "600s",
          }}
        >
          <p>Sri Lanka</p>
          <p>Bali Indonesia</p>
          <p>maldives</p>
          <p>Milan Italy</p>
        </div> */}

          <div className="i-icons-e">
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
        <div className="i-right-e">
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
            src={img1}
            className="w-main-circle-e"
            style={{
              objectFit: "cover",
              objectPosition: "50% 100%",
            }}
            alt={""}
          />

          <Image src={img2} className="w-back-circle-e" alt={""} />

          {/* </div> */}
          <animated.div
            className="floating-div-e"
            ref={ref}
            style={{ top: "80%", left: "12%", ...props }}
          >
            {/* <FloatingDiv image={crown} txt1="Web" txt2="Developer" /> */}
          </animated.div>
          <animated.div
            className="floating-div-e"
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
      <EducationCarousal/>
    </main>
  );
}
