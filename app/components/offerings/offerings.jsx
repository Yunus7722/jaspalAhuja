"use client";

import React, { useState } from "react";
import "./offerings.css";

const Solutions_and_services = () => {
  return (
    <div id="offerings" className="mainContainer">
      <div className="mainHeader underline">Our Offerings</div>

      <div className="firstRow">
        <div className="cardMain">
          {/* <div className="icon">
            <img src={isHovered1 ? ic1w : ic1w} alt="" />
          </div> */}
          <h2 className="headerText">Corporate Trainings & Retreats</h2>

          <p className="paraText">• Leadership and Management</p>
          <p className="paraText" style={{ marginRight: "-2rem" }}>
            Skills
          </p>
          <p className="paraText">• Communication & Interpersonal</p>
          <p className="paraText" style={{ marginRight: "-2rem" }}>
            Skills
          </p>
          <p className="paraText">• Team Building & Collaboration</p>
          <p className="paraText" style={{ marginRight: "-2rem" }}></p>
          <p className="paraText">• Time Management &</p>
          <p className="paraText" style={{ marginRight: "-2rem" }}>
            Productivity
          </p>
          {/* <p className="paraText" style={{ marginRight: "-2rem" }}>
           
          </p> */}
          <a
            className="hyperLink"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            Learn more
          </a>

          <div className="button i-button">Apply Here</div>
        </div>

        {/* Open the modal using document.getElementById('ID').showModal() method */}

        <dialog id="my_modal_1" className="modal">
          <div className="modal-box modal-custom-box">
            <h3 className="font-bold text-3xl mb-4">
              Corporate Trainings & Retreats
            </h3>
            <p className="paraText">• Leadership and Management Skills</p>
            {/* <p className="paraText" style={{ marginRight: "-2rem" }}>
              
            </p> */}
            <p className="paraText">• Communication & Interpersonal Skills</p>
            {/* <p className="paraText" style={{ marginRight: "-2rem" }}>
              
            </p> */}
            <p className="paraText">• Team Building & Collaboration</p>
            {/* <p className="paraText" style={{ marginRight: "-2rem" }}></p> */}
            <p className="paraText">• Time Management & Productivity</p>
            {/* <p className="paraText" style={{ marginRight: "-2rem" }}>
              
            </p> */}
            <p className="paraText">• Diversity and Inclusion </p>
            <p className="paraText">• Conflict Resolution and Negotiation </p>
            <p className="paraText">
              • Customer Service and Relationship Management{" "}
            </p>
            <p className="paraText">• Sales and Marketing Techniques </p>
            <p className="paraText">• Project Management Change Management </p>
            <p className="paraText">• Emotional Intelligence </p>
            <p className="paraText">• Problem Solving and Critical Thinking </p>
            <p className="paraText">• Innovation and Creativity </p>
            <p className="paraText">• Stress Management and Well-being</p>
            <p className="paraText">• Presentation and Public Speaking</p>
            <p className="paraText">• Financial Literacy</p>

            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>

        <div className="cardMain">
          {/* <div className="icon">
            <img src={isHovered3 ? ic3w : ic3w} alt="" />
          </div> */}
          <h2 className="headerText">Open Retreat </h2>
          <h2 className="headerText2">Programs </h2>
          <p className="paraText">• 1 Day Retreat on FInding</p>
          <p className="paraText" style={{ marginRight: "-2rem" }}>
            Financial Freedom
          </p>
          <p className="paraText">• 2 Days Retreat on Rejoicing</p>
          <p className="paraText" style={{ marginRight: "-2rem" }}>
            Rocking Relationships
          </p>
          <p className="paraText">• 3 Days Retreat on Total </p>
          <p className="paraText" style={{ marginRight: "-2rem" }}>
            Life Detox
          </p>

          <a
            className="hyperLink"
            onClick={() => document.getElementById("my_modal_2").showModal()}
          >
            Learn more
          </a>
          <div className="button i-button">Apply Here</div>
        </div>

        {/* Open the modal using document.getElementById('ID').showModal() method */}

        <dialog id="my_modal_2" className="modal">
          <div className="modal-box modal-custom-box">
            <h3 className="font-bold text-3xl mb-4">Open Retreat Programs</h3>
            <p className="paraText">• 1 Day Retreat on FInding</p>
            <p className="paraText" style={{ marginRight: "-2rem" }}>
              Financial Freedom
            </p>
            <p className="paraText">• 2 Days Retreat on Rejoicing</p>
            <p className="paraText" style={{ marginRight: "-2rem" }}>
              Rocking Relationships
            </p>
            <p className="paraText">• 3 Days Retreat on Total </p>
            <p className="paraText" style={{ marginRight: "-2rem" }}>
              Life Detox
            </p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>

        <div className="cardMain">
          <h2 className="headerText">Retreats & Programs for Housewives</h2>
          <p className="paraText">• Budgeting, finances &</p>
          <p className="paraText" style={{ marginRight: "-2rem" }}>
            Entrepreneurship
          </p>
          <p className="paraText">• Time Management &</p>
          <p className="paraText" style={{ marginRight: "-2rem" }}>
            Organizational Skills
          </p>
          <p className="paraText">• Self & Family happiness</p>
          <p className="paraText" style={{ marginRight: "-2rem" }}>
            SUTRAS
          </p>
          <p className="paraText">• Parenting Excellence</p>

          <a
            className="hyperLink"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Learn more
          </a>
          <div className="button i-button">Apply Here</div>
        </div>
      </div>

      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box modal-custom-box">
          <h3 className="font-bold text-3xl mb-4">
            Retreats & Programs for Housewives
          </h3>
          <p className="paraText">• Budgeting, finances &</p>
          <p className="paraText" style={{ marginRight: "-2rem" }}>
            Entrepreneurship
          </p>
          <p className="paraText">• Time Management &</p>
          <p className="paraText" style={{ marginRight: "-2rem" }}>
            Organizational Skills
          </p>
          <p className="paraText">• Self & Family happiness</p>
          <p className="paraText" style={{ marginRight: "-2rem" }}>
            SUTRAS
          </p>
          <p className="paraText">• Parenting Excellence</p>
          <p className="paraText">
            • Yoga Ayurveda Lifestyle Health nutrition, wellness & gardening{" "}
          </p>
          <p className="paraText">• Communication & interpersonal skills </p>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      <div className="secondRow">
        <div className="cardMain">
          <h2 className="headerText">Retreats & Programs for Students </h2>

          <p className="paraText">• Life Skills: financial literacy,</p>
          <p className="paraText" style={{ marginRight: "-2rem" }}>
            time management, and basic Skills.
          </p>
          <p className="paraText">• Critical thinking, problem-</p>
          <p className="paraText" style={{ marginRight: "-2rem" }}>
            solving & decision-making.
          </p>
          <p className="paraText">• Social Skills Empathy,</p>
          <p className="paraText" style={{ marginRight: "-2rem" }}>
            & building healthy relationships.
          </p>

          <a
            className="hyperLink"
            onClick={() => document.getElementById("my_modal_4").showModal()}
          >
            Learn more
          </a>
          <div className="button i-button">Apply Here</div>
        </div>

        {/* Open the modal using document.getElementById('ID').showModal() method */}

        <dialog id="my_modal_4" className="modal">
          <div className="modal-box modal-custom-box">
            <h3 className="font-bold text-3xl mb-4">
              Retreats & Programs for Students{" "}
            </h3>
            <p className="paraText">• Life Skills: financial literacy,</p>
            <p className="paraText" style={{ marginRight: "-2rem" }}>
              time management, and basic Skills.
            </p>
            <p className="paraText">• Critical thinking, problem-</p>
            <p className="paraText" style={{ marginRight: "-2rem" }}>
              solving & decision-making.
            </p>
            <p className="paraText">• Social Skills Empathy,</p>
            <p className="paraText" style={{ marginRight: "-2rem" }}>
              & building healthy relationships.
            </p>
            <p className="paraText">
              • Health & Organic Lifestyle: yoga, nutrition, mental health &
              stress management.
            </p>
            <p className="paraText">
              • Communication skills, including listening and speaking.
            </p>
            <p className="paraText">• Career Development & guidance!</p>

            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default Solutions_and_services;
