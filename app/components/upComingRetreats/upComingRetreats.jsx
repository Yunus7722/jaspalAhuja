"use client";

import React, { useState } from "react";
import "./upComingRetreats.css";
// import pr2 from "../../img/smallBorder.png";
// import ic1 from "../../img/Group.png";
// import ic2 from "../../img/Vector.png";
// import ic3 from "../../img/Vector2.png";
// import ic1w from "../../img/gr2w.png";
// import ic2w from "../../img/v1w.png";
// import ic3w from "../../img/v2w.png";

const Solutions_and_services = () => {
  const [isHovered1, setIsHovered1] = useState(true);

  const handleHover1 = () => {
    setIsHovered1(!isHovered1);
  };

  const [isHovered2, setIsHovered2] = useState(true);

  const handleHover2 = () => {
    setIsHovered2(!isHovered2);
  };
  const [isHovered3, setIsHovered3] = useState(true);

  const handleHover3 = () => {
    setIsHovered3(!isHovered3);
  };

  const [isHovered4, setIsHovered4] = useState(true);

  const handleHover4 = () => {
    setIsHovered4(!isHovered4);
  };
  const [isHovered5, setIsHovered5] = useState(true);

  const handleHover5 = () => {
    setIsHovered5(!isHovered5);
  };

  return (
    <div id="upComingRetreats" className="mainContainer">
      <div className="mainHeader">Upcoming Retreats</div>
      {/* <div className=""> */}
      {/* <img
        className="smallBorder"
        style={{ width: "5%", objectFit: "cover" }}
        src={pr2}
        alt="pr2"
      /> */}
      {/* </div> */}
      <div className="firstRow">
        <div
          className="cardMain"
          onMouseEnter={handleHover1}
          onMouseLeave={handleHover1}
        >
          {/* <div className="icon">
            <img src={isHovered1 ? ic1w : ic1w} alt="" />
          </div> */}
          <h2 className="headerText">VYN - Workmen Onboarding </h2>

          {/* <p className="paraText">• Online Authenticated</p>
          <p className="paraText" style={{ marginRight: "-2rem" }}>
            Onboarding
          </p>
          <p className="paraText">• Background Verification</p>
          <p className="paraText">• Supports ERP Integrations</p>
          <p className="paraText">• Compliance Module</p> */}
          {/* <p className="paraText" style={{ marginRight: "-2rem" }}>
           
          </p> */}
          <div className="button i-button">Apply Here</div>
        </div>
        {/* <div className="cardMain" onMouseEnter={handleHover2} onMouseLeave={handleHover2}>
                    <div className="icon">
                        <img src={isHovered2 ? ic3 : ic2w} alt="" />
                    </div>
                    <h2 className="headerText">CONTRACTOR WORKFORCE ONBOARDING (VYN)</h2>
                    <p className="paraText">
                        Lorem Ipsum is simply dummy
                        text of the printing and
                        typesetting industry.
                    </p>
                    <a className="hyperLink">Learn More</a>
                </div> */}

        {/* <div
          className="cardMain"
          onMouseEnter={handleHover2}
          onMouseLeave={handleHover2}
        >
          <div className="icon">
            <img src={isHovered2 ? ic2w : ic2w} alt="" />
          </div>
          <h2 className="headerText">DEVELOPMENT</h2>
          <h2 className="headerText2">SERVICES</h2>
          <p className="paraText">• Cloud & Mobile</p>
          <p className="paraText" style={{ marginRight: "-2rem" }}>
            App Development
          </p>
          <p className="paraText">• Cloud Migration &</p>
          <p className="paraText" style={{ marginRight: "-2rem" }}>
            DevOps
          </p>
          <p className="paraText">• Unified UX Design</p>
          <p className="paraText">• DevOps</p>
          <a className="hyperLink" href="/devServices">
            Learn More
          </a>
        </div> */}
        <div
          className="cardMain"
          onMouseEnter={handleHover3}
          onMouseLeave={handleHover3}
        >
          {/* <div className="icon">
            <img src={isHovered3 ? ic3w : ic3w} alt="" />
          </div> */}
          <h2 className="headerText">VYN - Workmen Onboarding </h2>
          {/* <h2 className="headerText2">and Labor Compliances</h2> */}
          {/* <p className="paraText">• Accelerated Onboarding </p>
          <p className="paraText" style={{ marginRight: "-2rem" }}>
            with Aadhaar
          </p>
          <p className="paraText">• Real time oversight</p>
          <p className="paraText" style={{ marginRight: "-2rem" }}>
            of Contractors & Workmen
          </p> */}
          {/* <p className="paraText" style={{ marginRight: "-2rem" }}>
            
          </p> */}
          {/* <p className="paraText">• Notifications and Alerts</p> */}

          <div className="button i-button">Apply Here</div>
        </div>

        <div
          className="cardMain"
          onMouseEnter={handleHover5}
          onMouseLeave={handleHover5}
        >
          {/* <div className="icon">
            <img src={isHovered5 ? ic2w : ic2w} alt="" />
          </div> */}
          <h2 className="headerText">CONTRACT WORKFORCE </h2>
          {/* <h2 className="headerText2"> MANAGEMENT (CWFM)</h2> */}
          {/* <p className="paraText">• Tailor-made data tables </p> */}
          {/* <p className="paraText" style={{ marginRight: "-2rem" }}>
            with Aadhaar
          </p> */}
          {/* <p className="paraText">• Time and Attendance </p>
          <p className="paraText" style={{ marginRight: "-2rem" }}>
            Capture
          </p>

          <p className="paraText">• Scheduling & </p>
          <p className="paraText" style={{ marginRight: "-2rem" }}>
            Regularisation
          </p>
          <p className="paraText">• CLRA reports & Dashboards</p> */}
          <div className="button i-button">Apply Here</div>
        </div>
      </div>

      <div className="secondRow">
        <div
          className="cardMain"
          onMouseEnter={handleHover1}
          onMouseLeave={handleHover1}
        >
          {/* <div className="icon">
            <img src={isHovered1 ? ic1w : ic1w} alt="" />
          </div> */}
          <h2 className="headerText">VYN - Workmen Onboarding </h2>

          {/* <p className="paraText">• Online Authenticated</p>
          <p className="paraText" style={{ marginRight: "-2rem" }}>
            Onboarding
          </p>
          <p className="paraText">• Background Verification</p>
          <p className="paraText">• Supports ERP Integrations</p>
          <p className="paraText">• Compliance Module</p> */}
          {/* <p className="paraText" style={{ marginRight: "-2rem" }}>
           
          </p> */}
          <div className="button i-button">Apply Here</div>
        </div>
        {/* <div className="cardMain" onMouseEnter={handleHover2} onMouseLeave={handleHover2}>
                    <div className="icon">
                        <img src={isHovered2 ? ic3 : ic2w} alt="" />
                    </div>
                    <h2 className="headerText">CONTRACTOR WORKFORCE ONBOARDING (VYN)</h2>
                    <p className="paraText">
                        Lorem Ipsum is simply dummy
                        text of the printing and
                        typesetting industry.
                    </p>
                    <a className="hyperLink">Learn More</a>
                </div> */}

        {/* <div
          className="cardMain"
          onMouseEnter={handleHover2}
          onMouseLeave={handleHover2}
        >
          <div className="icon">
            <img src={isHovered2 ? ic2w : ic2w} alt="" />
          </div>
          <h2 className="headerText">DEVELOPMENT</h2>
          <h2 className="headerText2">SERVICES</h2>
          <p className="paraText">• Cloud & Mobile</p>
          <p className="paraText" style={{ marginRight: "-2rem" }}>
            App Development
          </p>
          <p className="paraText">• Cloud Migration &</p>
          <p className="paraText" style={{ marginRight: "-2rem" }}>
            DevOps
          </p>
          <p className="paraText">• Unified UX Design</p>
          <p className="paraText">• DevOps</p>
          <a className="hyperLink" href="/devServices">
            Learn More
          </a>
        </div> */}
        <div
          className="cardMain"
          onMouseEnter={handleHover3}
          onMouseLeave={handleHover3}
        >
          {/* <div className="icon">
            <img src={isHovered3 ? ic3w : ic3w} alt="" />
          </div> */}
          <h2 className="headerText">VYN - Workmen Onboarding </h2>
          {/* <h2 className="headerText2">and Labor Compliances</h2> */}
          {/* <p className="paraText">• Accelerated Onboarding </p>
          <p className="paraText" style={{ marginRight: "-2rem" }}>
            with Aadhaar
          </p>
          <p className="paraText">• Real time oversight</p>
          <p className="paraText" style={{ marginRight: "-2rem" }}>
            of Contractors & Workmen
          </p> */}
          {/* <p className="paraText" style={{ marginRight: "-2rem" }}>
            
          </p> */}
          {/* <p className="paraText">• Notifications and Alerts</p> */}

          <div className="button i-button">Apply Here</div>
        </div>

        <div
          className="cardMain"
          onMouseEnter={handleHover5}
          onMouseLeave={handleHover5}
        >
          {/* <div className="icon">
            <img src={isHovered5 ? ic2w : ic2w} alt="" />
          </div> */}
          <h2 className="headerText">CONTRACT WORKFORCE </h2>
          {/* <h2 className="headerText2"> MANAGEMENT (CWFM)</h2> */}
          {/* <p className="paraText">• Tailor-made data tables </p> */}
          {/* <p className="paraText" style={{ marginRight: "-2rem" }}>
            with Aadhaar
          </p> */}
          {/* <p className="paraText">• Time and Attendance </p>
          <p className="paraText" style={{ marginRight: "-2rem" }}>
            Capture
          </p>

          <p className="paraText">• Scheduling & </p>
          <p className="paraText" style={{ marginRight: "-2rem" }}>
            Regularisation
          </p>
          <p className="paraText">• CLRA reports & Dashboards</p> */}
          <div className="button i-button">Apply Here</div>
        </div>
      </div>
      {/* <div className="secondRow"> */}
      {/* <div
          className="cardMain"
          onMouseEnter={handleHover4}
          onMouseLeave={handleHover4}
        >
          <div className="icon">
            <img src={isHovered4 ? ic1w : ic1w} alt="" />
          </div>
          <h2 className="headerText">INTELLIGENT</h2>
          <h2 className="headerText2">AUTOMATION</h2>
          <p
            className="paraText"
            style={{ textAlign: "center", marginRight: "3rem" }}
          >
            WikiWorks provides Intelligent Automation services across Test
            Automation and RPA. The objective is to increase Employee
          </p>
          <a className="hyperLink" href="/intelligent">
            Learn More
          </a>
        </div> */}
      {/* <div
          className="cardMain"
          onMouseEnter={handleHover5}
          onMouseLeave={handleHover5}
        >
          <div className="icon">
            <img src={isHovered5 ? ic3w : ic3w} alt="" />
          </div>
          <h2 className="headerText">SERVICE FOR </h2>
          <h2 className="headerText2">UKG KRONOS</h2>
          <p
            className="paraText"
            style={{ textAlign: "center", marginRight: "3rem" }}
          >
            WikiWorks has been providing full-Scale services for UKG/Kronos
            since 2013. With many delighted customers and 1000s of users,
          </p>
          <a className="hyperLink" href="/kronos">
            Learn More
          </a>
        </div> */}

      {/* </div> */}
    </div>
  );
};

export default Solutions_and_services;
