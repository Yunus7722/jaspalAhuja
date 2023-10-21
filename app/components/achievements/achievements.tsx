"use client";

import React, { useState, useEffect } from "react";
import "./achievements.css";
import ill1 from "../../img/ill1.png";
import Image from "next/image";
import CountUp from "react-countup";

function Achievements() {
  const [satisfiedUsersCount, setSatisfiedUsersCount] = useState(0);
  const [experiencedProfessionalsCount, setExperiencedProfessionalsCount] =
    useState(0);
  const [clients, setClients] = useState(0);

  useEffect(() => {
    // Set the target values (200 and 80) and start the counting animations after a delay
    setTimeout(() => {
      setSatisfiedUsersCount(10);
      setExperiencedProfessionalsCount(50);
      setClients(400);
    }, 1000); // Adjust the delay as needed
  }, []);

  return (
    <div className="achievementsMain" id="Feats">
      <div className="achievementLeft">
        <div className="statusContainer1">
          <div className="statusIcon">
            <i
              className="fa-regular fa-face-smile"
              style={{ color: "var(--darkBlue)", fontSize: "30px" }}
            ></i>
          </div>
          <div className="statusIcon">
            <i
              className="fa-solid fa-people-roof"
              style={{ color: "var(--darkBlue)", fontSize: "30px" }}
            ></i>
          </div>
        </div>
        <div className="statusContainer2">
          <div className="statusTexts">
            <div className="statusHeader">
              <CountUp end={satisfiedUsersCount} duration={2} separator="," />
              K+
            </div>
            <p className="statusPara">People Trained Worldwide</p>
          </div>
          <div className="statusTexts">
            <div className="statusHeader">
              <CountUp
                end={experiencedProfessionalsCount}
                duration={2}
                separator=","
              />+
            </div>
            <p className="statusPara">Corporates engaged worldwide</p>
            {/* <p className="statusPara">with commitment beyond contract</p> */}
          </div>
          <div className="statusTexts">
            <div className="statusHeader">
              <CountUp end={clients} duration={2} separator="," />+
            </div>
            <p className="statusPara">Clients on One to One Life Coaching</p>
            {/* <p className="statusPara">with commitment beyond contract</p> */}
          </div>
        </div>
      </div>
      <div className="achievementRight">
        <Image
          style={{
            width: "50%",
            objectFit: "contain",
            borderRadius: "31% 69% 34% 66% / 51% 53% 47% 49%",
          }}
          src={ill1}
          alt=""
        />
      </div>
    </div>
  );
}

export default Achievements;
