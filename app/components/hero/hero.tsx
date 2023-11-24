"use client";
import "./hero.css";
import { useEffect, useState } from "react";
import imgDesign from "../../img/abstract2.png";
import imgPic from "../../img/ProfilePIcY.png";
import crown from "../../img/crown.png";
import thumbUp from "../../img/thumbup.png";
import glasses from "../../img/Pikachu.png";

import img1 from "../../img/jp2.jpg";
import img2 from "../../img/ret1.jpg";
import img3 from "../../img/ret5.jpg";
import img4 from "../../img/italy.jpg";
import img5 from "../../img/ret4.jpg";
import mal from "../../img/jpo2.jpg";
// import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { useContext } from "react";
// import {motion} from 'framer-motion'
// import { animated, useSpring } from '@react-spring/web'
import Image from "next/image";

import { useSpring, animated } from "react-spring";
import { Link as ScrollLink } from "react-scroll";
import { useInView } from "react-intersection-observer";
import { Typewriter } from "react-simple-typewriter";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";

import Link from "next/link";

export default function Intro() {
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
    <div className="intro" id="Home">
      <a
        href="https://wa.me/+919844290460?text=Hi%20Jas%20Ahuja%20let's%20Discuss"
        className="floating"
        target="_blank"
      >
        <i className="fi fi-brands-whatsapp"></i>
      </a>
      {/* <Link href="/components/products">
        <div className="product-float">
          <div className="product-float-text">Our Products</div>
        </div>
      </Link> */}
      <div className="overlay"></div>

      <div className="i-left">
        <div className="i-name">
          <span></span>
          <span>
            Jas Ahuja{" "}
            <span style={{ fontSize: 22, color: "#c9184a", fontWeight: "800" }}>
              Transformation Coach
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
              Wisdom Wealth & Wellness Wizard! Relationship Counselor & Life
              Coach!{" "}
              <p>
                Graduated from IIT Roorkee in Mech. Engg, worked as Petro
                chemical Engineer & then as Corporate Trainer. Later plunged
                into alternative education, worked with schools in India, East
                Asia & Europe, and founded an Alternative school too. He has
                been part of many successful Edtech start-ups
                <Link href="/components/aboutUs">
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
                </Link>{" "}
              </p>
            </p>
          </p>
        </div>

        <div className="add-container">
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
            <div className="button i-button">Get in touch</div>
          </ScrollLink>
          <ScrollLink
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
            <div className="burst-container">
              <div className="burst-12"></div>
              <div className="static-content">View Upcoming Events</div>
            </div>
          </ScrollLink>

          <div onClick={() => setOpenModal(true)} className="burst-container">
            <div className="burst-12"></div>
            <div className="static-content -ml-1">
              &nbsp;&nbsp;&nbsp;1 - 1&nbsp; &nbsp;&nbsp;Life &nbsp;Coaching
            </div>
          </div>
        </div>

        <div className="circular-image-rect">
          <div className="circ-text-cont">
            <Image
              src={img5}
              style={{ objectFit: "cover", objectPosition: "50% 25%" }}
              className="w-sec-circle"
              alt={""}
            />
            <p className="loc-text underline">Sri Lanka</p>
          </div>
          <div className="circ-text-cont">
            <Image
              src={img3}
              style={{ objectFit: "cover", objectPosition: "80% 50%" }}
              className="w-sec-circle"
              alt={""}
            />
            <p className="loc-text underline">Bali Indonesia</p>
          </div>
          <div className="circ-text-cont">
            <Image
              src={mal}
              style={{ objectFit: "cover", objectPosition: "50% 25%" }}
              className="w-sec-circle"
              alt={""}
            />
            <p className="loc-text underline">Maldives</p>
          </div>
          <div className="circ-text-cont">
            <Image
              src={img4}
              style={{ objectFit: "cover", objectPosition: "50% 25%" }}
              className="w-sec-circle"
              alt={""}
            />
            <p className="loc-text underline">Milan Italy</p>
          </div>
          {/* <div className="w-sec-circle">
            <Image src={img5} alt="" />
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
          src={img1}
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

      <Modal
        show={openModal}
        size="md"
        onClose={onCloseModal}
        popup
        className="custom-modal"
      >
        <Modal.Header className="modal-head" />
        <Modal.Body className="modal-body">
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Sign in to our platform
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email"
                placeholder="name@company.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Your password" />
              </div>
              <TextInput id="password" type="password" required />
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>
              <a
                href="#"
                className="text-sm text-cyan-700 hover:underline dark:text-cyan-500"
              >
                Lost Password?
              </a>
            </div>
            <div className="w-full">
              <Button>Log in to your account</Button>
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?&nbsp;
              <a
                href="#"
                className="text-cyan-700 hover:underline dark:text-cyan-500"
              >
                Create account
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
