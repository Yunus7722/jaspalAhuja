"use client";
import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import imgC1 from "../../img/r1.png";
import imgC2 from "../../img/r2.png";
import imgC3 from "../../img/r3.png";
import imgC4 from "../../img/r4.png";
import imgC5 from "../../img/r5.png";
import "./retreat.css";
import Image from "next/image";

import {
  Button,
  Checkbox,
  Label,
  Modal,
  TextInput,
  Textarea,
} from "flowbite-react";

const Retreat = () => {
  // for Cards apply
  const [selectedCard, setSelectedCard] = useState(null);
  const handleCardApply = (card) => {
    setSelectedCard(card);
    setOpenModal(true);
  };

  const card1 = {
    title: "Corporate Training and Retreats",
    timing: "@ 12:00 AM on 01/02/2023",
  };

  const card2 = {
    title: "Programs & Retreats for Housewives",
    timing: "@ 10:00 PM on 25/12/2023",
  };

  const card3 = {
    title: "Retreats & Programs for Parents",
    timing: "@ 01:00 PM on 05/12/2023",
  };

  const card4 = {
    title: "Corporate & Programs for Parents",
    timing: "@ 03:00 PM on 25/12/2023",
  };

  const card5 = {
    title: "Retreats & Programs for Parents",
    timing: "@ 03:30 PM on 25/12/2023",
  };

  //for Modal
  const [openModal, setOpenModal] = useState(false);

  const [email, setEmail] = useState("");

  function onCloseModal() {
    setOpenModal(false);
  }

  const [name, setName] = useState("");
  const [query, setQuery] = useState("Hi Jas Ahuja, My name is _");

  const handleNameChange = (event) => {
    const newName = event.target.value;
    setName(newName);
    setQuery(`Hi Jas Ahuja, My name is  ${newName}`);
  };

  const whatsappForEvents = (text) => {
    const whatsappBase = "https://wa.me/+919844290460";
    const encodedQuery = encodeURIComponent(`${query}`);
    const encodedSubject = encodeURIComponent(text);

    return `${whatsappBase}?text=${encodedQuery}%0A${encodedSubject}`;
  };

  const slides = [
    {
      image: imgC1,
      //   text: "Specialized in Contract Workforce Management (CWFM) Products",
    },
    {
      image: imgC2,
      //   text: "Virtual Workmen Onboarding and Labor Compliance for best ROI",
    },
    {
      image: imgC3,
      //   text: "Transformation of HCM through ",
      //   text2: "Verify Onboard (VYN) and CWFM",
    },
    {
      image: imgC4,
      //   text: "HCM powered by Automation for Higher Employee Engagement and {card1.timing}",
    },
    {
      image: imgC5,
      //   text: "HCM powered by Automation for Higher Employee Engagement and {card1.timing}",
    },
  ];

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div className="retreat-container" id="upComingEvents">
      {/* <div className="overlay-retreat"></div> */}
      <h1 className="retreatHeading underline">Upcoming Events</h1>
      <div className="retreat-center-main">
        <div className="left-retreat">
          <div className="carousal-container">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              autoplay={{ delay: 3000 }}
              smooth
              slidesPerView={1}
              pagination={{ clickable: true }}
              loop={true}
              onSlideChange={(swiper) => {
                setActiveSlideIndex(swiper.realIndex);
              }}
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="imgContainer">
                    <Image
                      className="imgCss"
                      src={slide.image}
                      alt={`Slide ${index}`}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* <div className="stackContent">
          <div className="stackText">{slides[activeSlideIndex].text}</div>
          <div className="stackText2">{slides[activeSlideIndex].text2}</div>
        </div> */}
          </div>
          <div className="carousal-container-apply">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              autoplay={{ delay: 3000 }}
              smooth
              slidesPerView={1}
              pagination={{ clickable: true }}
              loop={true}
            >
              <SwiperSlide>
                <div className="imgContainer">
                  <div className="cardMain-r">
                    <h2 className="headerText-r">{card1.title}</h2>
                    <p className="paraText-r">• Leadership and Management</p>
                    <p className="paraText-r" style={{ marginRight: "-2rem" }}>
                      Skills
                    </p>
                    <p className="paraText-r">
                      • Communication & Interpersonal
                    </p>
                    <p className="paraText-r" style={{ marginRight: "-2rem" }}>
                      Skills
                    </p>
                    <p className="paraText-r">
                      • Team Building & Collaboration
                    </p>
                    <p
                      className="paraText-r"
                      style={{ marginRight: "-2rem" }}
                    ></p>
                    <p className="paraText-r">• Time Management &</p>
                    <p
                      className="paraText-r"
                      style={{
                        marginTop: "1rem",
                        marginTop: "1rem",
                        marginRight: "-2rem",
                      }}
                    >
                      {card1.timing}
                    </p>
                    <a
                      // href="https://wa.me/+919844290460?text=Hi%20Jas%20Ahuja%20let's%20Discuss"

                      className="floating-e"
                      target="_blank"
                    >
                      {" "}
                      <div
                        // onClick={() => setOpenModal(true)}
                        onClick={() => handleCardApply(card1)}
                        className="button-grad1 r-button"
                      >
                        Apply Here
                      </div>
                    </a>{" "}
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="imgContainer">
                  <div className="cardMain-r">
                    <h2 className="headerText-r">{card2.title}</h2>
                    <p className="paraText-r">• Leadership and Management</p>
                    <p className="paraText-r" style={{ marginRight: "-2rem" }}>
                      Skills
                    </p>
                    <p className="paraText-r">
                      • Communication & Interpersonal
                    </p>
                    <p className="paraText-r" style={{ marginRight: "-2rem" }}>
                      Skills
                    </p>
                    <p className="paraText-r">
                      • Team Building & Collaboration
                    </p>
                    <p
                      className="paraText-r"
                      style={{ marginRight: "-2rem" }}
                    ></p>
                    <p className="paraText-r">• Time Management &</p>
                    <p
                      className="paraText-r"
                      style={{ marginTop: "1rem", marginRight: "-2rem" }}
                    >
                      {card2.timing}
                    </p>
                    <a
                      // href="https://wa.me/+919844290460?text=Hi%20Jas%20Ahuja%20let's%20Discuss"

                      className="floating-e"
                      target="_blank"
                    >
                      {" "}
                      <div
                        // onClick={() => setOpenModal(true)}
                        onClick={() => handleCardApply(card2)}
                        className="button-grad1 r-button"
                      >
                        Apply Here
                      </div>
                    </a>{" "}
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="imgContainer">
                  <div className="cardMain-r">
                    <h2 className="headerText-r">{card3.title}</h2>
                    <p className="paraText-r">• Leadership and Management</p>
                    <p className="paraText-r" style={{ marginRight: "-2rem" }}>
                      Skills
                    </p>
                    <p className="paraText-r">
                      • Communication & Interpersonal
                    </p>
                    <p className="paraText-r" style={{ marginRight: "-2rem" }}>
                      Skills
                    </p>
                    <p className="paraText-r">
                      • Team Building & Collaboration
                    </p>
                    <p
                      className="paraText-r"
                      style={{ marginRight: "-2rem" }}
                    ></p>
                    <p className="paraText-r">• Time Management &</p>
                    <p
                      className="paraText-r"
                      style={{ marginTop: "1rem", marginRight: "-2rem" }}
                    >
                      {card3.timing}
                    </p>
                    <a
                      // href="https://wa.me/+919844290460?text=Hi%20Jas%20Ahuja%20let's%20Discuss"

                      className="floating-e"
                      target="_blank"
                    >
                      {" "}
                      <div
                        // onClick={() => setOpenModal(true)}
                        onClick={() => handleCardApply(card3)}
                        className="button-grad1 r-button"
                      >
                        Apply Here
                      </div>
                    </a>{" "}
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="imgContainer">
                  <div className="cardMain-r">
                    <h2 className="headerText-r">{card4.title}</h2>
                    <p className="paraText-r">• Leadership and Management</p>
                    <p className="paraText-r" style={{ marginRight: "-2rem" }}>
                      Skills
                    </p>
                    <p className="paraText-r">
                      • Communication & Interpersonal
                    </p>
                    <p className="paraText-r" style={{ marginRight: "-2rem" }}>
                      Skills
                    </p>
                    <p className="paraText-r">
                      • Team Building & Collaboration
                    </p>
                    <p
                      className="paraText-r"
                      style={{ marginRight: "-2rem" }}
                    ></p>
                    <p className="paraText-r">• Time Management &</p>
                    <p
                      className="paraText-r"
                      style={{ marginTop: "1rem", marginRight: "-2rem" }}
                    >
                      {card4.timing}
                    </p>
                    <a
                      // href="https://wa.me/+919844290460?text=Hi%20Jas%20Ahuja%20let's%20Discuss"

                      className="floating-e"
                      target="_blank"
                    >
                      {" "}
                      <div
                        // onClick={() => setOpenModal(true)}
                        onClick={() => handleCardApply(card4)}
                        className="button-grad1 r-button"
                      >
                        Apply Here
                      </div>
                    </a>{" "}
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="imgContainer">
                  <div className="cardMain-r">
                    <h2 className="headerText-r">{card5.title}</h2>
                    <p className="paraText-r">• Leadership and Management</p>
                    <p className="paraText-r" style={{ marginRight: "-2rem" }}>
                      Skills
                    </p>
                    <p className="paraText-r">
                      • Communication & Interpersonal
                    </p>
                    <p className="paraText-r" style={{ marginRight: "-2rem" }}>
                      Skills
                    </p>
                    <p className="paraText-r">
                      • Team Building & Collaboration
                    </p>
                    <p
                      className="paraText-r"
                      style={{ marginRight: "-2rem" }}
                    ></p>
                    <p className="paraText-r">• Time Management &</p>
                    <p
                      className="paraText-r"
                      style={{ marginTop: "1rem", marginRight: "-2rem" }}
                    >
                      {card5.timing}
                    </p>
                    <a
                      // href="https://wa.me/+919844290460?text=Hi%20Jas%20Ahuja%20let's%20Discuss"

                      className="floating-e"
                      target="_blank"
                    >
                      {" "}
                      <div
                        // onClick={() => setOpenModal(true)}
                        onClick={() => handleCardApply(card5)}
                        className="button-grad1 r-button"
                      >
                        Apply Here
                      </div>
                    </a>{" "}
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            {/* <div className="stackContent">
          <div className="stackText">{slides[activeSlideIndex].text}</div>
          <div className="stackText2">{slides[activeSlideIndex].text2}</div>
        </div> */}
          </div>
        </div>
        {/* <div className="right-retreat">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{ delay: 3000 }}
            smooth
            slidesPerView={1}
            pagination={{ clickable: true }}
            loop={true}
          >
            <SwiperSlide>
              <div className="cardMain-r">
                <h2 className="headerText-r">Corporate Trainings & Retreats</h2>

                <p className="paraText-r">• Leadership and Management</p>
                <p className="paraText-r" style={{ marginRight: "-2rem" }}>
                  Skills
                </p>
                <p className="paraText-r">• Communication & Interpersonal</p>
                <p className="paraText-r" style={{ marginRight: "-2rem" }}>
                  Skills
                </p>
                <p className="paraText-r">• Team Building & Collaboration</p>
                <p className="paraText-r" style={{ marginRight: "-2rem" }}></p>
                <p className="paraText-r">• Time Management &</p>
                <p className="paraText-r" style={{ marginRight: "-2rem" }}>
                  {card1.timing}
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div> */}
      </div>
      <Modal
        show={openModal}
        size="md"
        onClose={onCloseModal}
        popup
        className="custom-modal"
      >
        <Modal.Header className="modal-head-r" />
        <Modal.Body className="modal-body-r">
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-white dark:text-white">
              {selectedCard && selectedCard.title}
            </h3>
            <form id="liveCoaching">
              <div>
                <div className="mb-2 block">
                  <Label
                    className="text-white"
                    htmlFor="name"
                    value="Your Name"
                  />
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
                    <Label
                      className="text-white"
                      htmlFor="query"
                      value="Write your query"
                    />
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
                <div className="mb-2 block">
                  <Label
                    className="text-white"
                    htmlFor="Scheduled"
                    value="Scheduled"
                  />
                </div>
                <Textarea
                  // placeholder="Ex : James"
                  id="Scheduled"
                  type="text"
                  rows={3}
                  cols={30}
                  value={`,I would Like to talk about ${
                    selectedCard && selectedCard.title
                  } which is scheduled ${selectedCard && selectedCard.timing}`}
                />
              </div>
            </form>

            <div className="w-full">
              <a
                target="_blank"
                href={whatsappForEvents(
                  `I would Like to talk about ${
                    selectedCard && selectedCard.title
                  } which is scheduled ${selectedCard && selectedCard.timing}`
                )}
              >
                <div style={{ width: "60%" }} className="button-grad1 r-button">
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
};

export default Retreat;
