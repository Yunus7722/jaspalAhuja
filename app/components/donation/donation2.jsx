"use client";

import React, { useEffect, useState } from "react";
import "./donation2.css";
import ill1 from "../../img/hum1mod.png";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

function Donations2() {
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
    <div className="main-donation-d2">
      <h1 className="achievementHeading-d2 underline mb-5"></h1>
      <div className="achievementsMain-d2" id="Feats">
        <div className="achievementLeft-d2">
          <div className="statusContainer1-d2" ref={satisfiedUsersRef}>
            <div className="statusIcon-d2">
              <i
                className="fa-regular fa-face-smile"
                style={{ color: "var(--d2arkBlue)", fontSize: "30px" }}
              ></i>
            </div>
            <div className="statusIcon-d2">
              <i
                className="fa-solid fa-people-roof-d2"
                style={{ color: "var(--d2arkBlue)", fontSize: "30px" }}
              ></i>
            </div>
          </div>

        
          <div className="statusContainer2-d2">
            <div className="statusTexts-d2">
              <div className="statusHeader-d2">
                Building A World In Joy Together
              </div>
              <p className="statusPara-d2">
                Global healing through love in action, and sharing the
                experience in joy so that We are Never Alone.
                Global healing through love in action, and sharing the
                experience in joy so that We are Never Alone.
                Global healing through love in action, and sharing the
                experience in joy so that We are Never Alone.
              </p>
            </div>
          </div>
        </div>
        <div class="divider divider-horizontal"></div>
        <div className="achievementRight-d2">
          <Image
            style={{
              height: "120%",
              width: "100%",
              objectFit: "contain",
            }}
            src={ill1}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Donations2;
