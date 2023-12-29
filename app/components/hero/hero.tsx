"use client";
import "./hero.css";
import { ChangeEvent, useEffect, useState } from "react";
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
import {
  Button,
  Checkbox,
  Label,
  Modal,
  TextInput,
  Textarea,
} from "flowbite-react";

import Link from "next/link";

export default function Intro() {
  // const [query, setQuery] = useState("Hello world");

  // for Coaching
  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const [name, setName] = useState("");
  const [query, setQuery] = useState("Hi Jas Ahuja, My name is _");

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value;
    setName(newName);
    setQuery(`Hi Jas Ahuja, My name is  ${newName}`);
  };

  const whatsappForLiveCoaching = () => {
    const whatsappBase = "https://wa.me/+919844290460";
    const encodedQuery = encodeURIComponent(`${query}`);
    const encodedSubject = encodeURIComponent("Subject : Coaching");

    return `${whatsappBase}?text=${encodedQuery}%0A${encodedSubject}`;
  };
  // for Counselling
  const handleQueryChangeCounselling = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setQueryCounselling(event.target.value);
  };

  const [nameCounselling, setNameCounselling] = useState("");
  const [queryCounselling, setQueryCounselling] = useState(
    "Hi Jas Ahuja, My name is _"
  );

  const handleNameChangeCounselling = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const newNameCounselling = event.target.value;
    setNameCounselling(newNameCounselling);
    setQueryCounselling(`Hi Jas Ahuja, My name is  ${newNameCounselling}`);
  };

  const whatsappForLiveCoachingCounselling = () => {
    const whatsappBase = "https://wa.me/+919844290460";
    const encodedQueryCounselling = encodeURIComponent(`${queryCounselling}`);
    const encodedSubjectCounselling = encodeURIComponent(
      "Subject : Counselling"
    );

    return `${whatsappBase}?text=${encodedQueryCounselling}%0A${encodedSubjectCounselling}`;
  };

  const [openModal, setOpenModal] = useState(false);
  const [openModalCounselling, setOpenModalCounselling] = useState(false);

  const [email, setEmail] = useState("");

  function onCloseModal() {
    setOpenModal(false);
  }
  function onCloseModalCouncelling() {
    setOpenModalCounselling(false);
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

  const dynamicText = `Hi Jas, let's discuss`;
  return (
    <div className="intro" id="Home">
      <a
        // href="https://wa.me/+919844290460?text=Hi%20Jas%20Ahuja%20let's%20Discuss"
        href={`https://wa.me/+919844290460?text=${encodeURIComponent(
          dynamicText
        )}`}
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
              {/* {" "}
              Wisdom Wealth & Wellness Wizard! Relationship Counselor & Life
              Coach!{" "} */}
              <p className="paraText-start">
                Jas Ahuja, an IITian, spiritual traveler since the dawn of his
                consciousness, with the wisdom of a sage, the prosperity of a
                Midas, and the well-being of a yogi, delved into petrochemicals
                and sculpted the human landscape as a corporate trainer. Driven
                by an insatiable thirst for knowledge, embarked on a global
                odyssey of the transformative power of alternative education and
                orchestrated the success of numerous Edtech start-ups. This
                holistic voyage and meetings with masters unearthed countless
                glittering gems of wisdom and yielded an abundance of profound
                insights. Standing bathed in this transformative light, Jas
                Ahuja is sharing this mind blowing understanding and guiding
                others towards wholeness & Happiness.{" "}
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "15px",
                    fontStyle: "italic",
                    color: "black",
                  }}
                >
                  {" "}
                  You are invited to partake in this journey of Transformation.
                </span>
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
          {/* <ScrollLink
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
          </ScrollLink> */}

          <div
            onClick={() => setOpenModalCounselling(true)}
            className="burst-container"
          >
            <div className="burst-12"></div>
            <div className="static-content">Ask for 1-1 Counselling</div>
          </div>

          <div onClick={() => setOpenModal(true)} className="burst-container">
            <div className="burst-12"></div>
            <div className="static-content -ml-1">
              &nbsp;&nbsp;&nbsp;Ask for &nbsp; &nbsp;&nbsp;&nbsp;1 - 1
              &nbsp;&nbsp;&nbsp;&nbsp; Life &nbsp;Coaching
            </div>
          </div>
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
        </div>

        <div className="vector-img-cont">
          <div className="vector-cont-indi">
            <div className="t-image-h">
              <Image
                src={img5}
                style={{ objectFit: "cover", objectPosition: "50% 25%" }}
                className="w-sec-circle-h"
                alt={""}
              />{" "}
            </div>
            <span>Sri Lanka</span>
          </div>
          <div className="vector-cont-indi">
            <div className="t-image-h">
              <Image
                src={img3}
                style={{ objectFit: "cover", objectPosition: "80% 50%" }}
                className="w-sec-circle-h"
                alt={""}
              />{" "}
            </div>
            <span>Bali Indonesia</span>
          </div>
          <div className="vector-cont-indi">
            <div className="t-image-h">
              <Image
                src={mal}
                style={{ objectFit: "cover", objectPosition: "50% 25%" }}
                className="w-sec-circle-h"
                alt={""}
              />{" "}
            </div>
            <span>Maldives</span>
          </div>
          <div className="vector-cont-indi">
            <div className="t-image-h">
              <Image
                src={img4}
                style={{ objectFit: "cover", objectPosition: "50% 25%" }}
                className="w-sec-circle-h"
                alt={""}
              />{" "}
            </div>
            <span>Milan Italy</span>
          </div>
        </div>

        {/* <div className="circular-image-rect">
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
         
        </div> */}

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
          <a style={{ textDecoration: "none", color: "inherit" }} href="">
            {" "}
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            style={{ textDecoration: "none", color: "inherit" }}
            href="https://www.linkedin.com/in/jaspal-singh-ahuja-a60b6612/"
          >
            {" "}
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            style={{ textDecoration: "none", color: "inherit" }}
            href="https://www.linkedin.com/in/jaspal-singh-ahuja-a60b6612/"
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
              Ask for One to One Life Coaching
            </h3>
            <form id="liveCoaching">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="name" value="Your Name" />
                </div>
                <TextInput
                  placeholder="Ex : James"
                  id="name"
                  type="text"
                  value={name}
                  onInput={handleNameChange}
                  required
                />

                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="query" value="Write your query" />
                  </div>
                  <Textarea
                    className="px-2 py-2 text-base"
                    id="query"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    required
                    rows={3} // Set the number of rows as needed
                    cols={30} // Set the number of columns as needed
                  />
                </div>
              </div>
            </form>

            <div className="w-full">
              <a target="_blank" href={whatsappForLiveCoaching()}>
                <div className="button-grad1 cust-width">
                  {" "}
                  Send Message
                </div>
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        show={openModalCounselling}
        size="md"
        onClose={onCloseModalCouncelling}
        popup
        className="custom-modal"
      >
        <Modal.Header className="modal-head" />
        <Modal.Body className="modal-body">
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Ask for One to One Conselling
            </h3>
            <form id="liveCoaching">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="name" value="Your Name" />
                </div>
                <TextInput
                  placeholder="Ex : James"
                  id="name"
                  type="text"
                  value={nameCounselling}
                  onInput={handleNameChangeCounselling}
                  required
                />

                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="query" value="Write your query" />
                  </div>
                  <Textarea
                    className="px-2 py-2 text-base"
                    id="query"
                    value={queryCounselling}
                    onChange={(event) =>
                      setQueryCounselling(event.target.value)
                    }
                    required
                    rows={3} // Set the number of rows as needed
                    cols={30} // Set the number of columns as needed
                  />
                </div>
              </div>
            </form>

            <div className="w-full">
              <a target="_blank" href={whatsappForLiveCoachingCounselling()}>
                <div  className="button-grad1 cust-width">
                  {" "}
                  Send Message
                </div>
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
