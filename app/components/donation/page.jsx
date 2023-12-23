"use client";

import React, { useEffect, useState } from "react";
import "./donation.css";
import ill1 from "../../img/ill1mod.png";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import Donation2 from "./donation2";
import Donation3 from "./donation3";
import Footer from "../Footer/Footer";

function Donations() {
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
    <main>
      <div className="main-donation-d">
        <h1 className="achievementHeading-d underline mb-5">Our Foundation</h1>
        <div className="achievementsMain-d" id="Feats">
          <div className="achievementLeft-d">
            <div className="statusContainer1-d" ref={satisfiedUsersRef}>
              <div className="statusIcon-d">
                <i
                  className="fa-regular fa-face-smile"
                  style={{ color: "var(--darkBlue)", fontSize: "30px" }}
                ></i>
              </div>
              <div className="statusIcon-d">
                <i
                  className="fa-solid fa-people-roof-d"
                  style={{ color: "var(--darkBlue)", fontSize: "30px" }}
                ></i>
              </div>
            </div>

            <Image
              style={{
                height: "120%",
                width: "100%",
                objectFit: "contain",
                borderRadius: "31% 69% 34% 66% / 51% 53% 47% 49%",
              }}
              src={ill1}
              alt=""
            />
            {/* <div className="statusContainer2-d">
            <div className="statusTexts-d">
              <div className="statusHeader-d">
                Building A World In Joy Together
              </div>
              <p className="statusPara-d">
                Global healing through love in action, and sharing the
                experience in joy so that We are Never Alone.
              </p>
            </div>
          </div> */}
          </div>
          <div class="divider divider-horizontal"></div>
          <div className="achievementRight-d">
            {/* <Image
            style={{
              height: "120%",
              width: "100%",
              objectFit: "contain",
              borderRadius: "31% 69% 34% 66% / 51% 53% 47% 49%",
            }}
            src={ill1}
            alt=""
          /> */}

            <div className="don-button">
              <div class="box">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <div class="content">
                  <h2>Building A World In Joy Together</h2>
                  <p>
                    <a>
                      Global healing through love in action, and sharing the
                      experience in joy so that We are Never Alone.
                    </a>
                  </p>
                  <div class="glow-on-hover">
                    <p>Donate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Donation2 />
      <Donation3 />
      <Footer />

    </main>
  );
}

export default Donations;
