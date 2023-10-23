"use client";

import React, { useEffect, useState } from "react";
import "./achievements.css";
import ill1 from "../../img/ill1.png";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

function Achievements() {
  const [satisfiedUsersCount, setSatisfiedUsersCount] = useState(0);
  const [experiencedProfessionalsCount, setExperiencedProfessionalsCount] =
    useState(0);
  const [clients, setClients] = useState(0);

  const [satisfiedUsersRef, satisfiedUsersInView] = useInView({
    // triggerOnce: true,
  });

  const [experiencedProfessionalsRef, experiencedProfessionalsInView] =
    useInView({
      // triggerOnce: true,
    });

  const [clientsRef, clientsInView] = useInView({
    // triggerOnce: true,
  });

  // Use useEffect to start the counting animations when the elements are in view
  useEffect(() => {
    if (satisfiedUsersInView) {
      setSatisfiedUsersCount(10000); // Set your target value here
    }
    if (experiencedProfessionalsInView) {
      setExperiencedProfessionalsCount(50); // Set your target value here
    }
    if (clientsInView) {
      setClients(400); // Set your target value here
    }
  }, [satisfiedUsersInView, experiencedProfessionalsInView, clientsInView]);

  return (
    <div className="achievementsMain" id="Feats">
      <div className="achievementLeft">
        <div className="statusContainer1" ref={satisfiedUsersRef}>
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
              {satisfiedUsersInView ? (
                <CountUp end={satisfiedUsersCount} duration={2} separator="," />
              ) : (
                "0"
              )}
              +
            </div>
            <p className="statusPara">People Trained Worldwide</p>
          </div>
          <div className="statusTexts" ref={experiencedProfessionalsRef}>
            <div className="statusHeader">
              {experiencedProfessionalsInView ? (
                <CountUp
                  end={experiencedProfessionalsCount}
                  duration={2}
                  separator=","
                />
              ) : (
                "0"
              )}
              +
            </div>
            <p className="statusPara">Corporates engaged worldwide</p>
          </div>
          <div className="statusTexts" ref={clientsRef}>
            <div className="statusHeader">
              {clientsInView ? (
                <CountUp end={clients} duration={2} separator="," />
              ) : (
                "0"
              )}
              +
            </div>
            <p className="statusPara">Clients on One to One Life Coaching</p>
          </div>
        </div>
      </div>
      <div className="achievementRight">
      <h1 className="achievementHeading underline mb-5">Our Achievements</h1>
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
