"use client";
import React from "react";
import "./contactUs.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import img from "../../img/contact_us_.png";

function contactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = () => {
    // const whatsappBase = "https://wa.me/+919844290460";
    // const encodedQuery = encodeURIComponent(`${query}`);
    // const encodedSubject = encodeURIComponent("Subject : Coaching");

    // return `${whatsappBase}?text=${encodedQuery}%0A${encodedSubject}`;
    // const contactText = `Name: ${name}%0A Email: ${email}%0A Message: ${message}`;
    const subject = "Subject: Contact Us";
    const whatsappUrl = `https://wa.me/+919844290460?text=Name: ${encodeURIComponent(
      name
    )}%0A Email: ${encodeURIComponent(email)}%0A Message: ${encodeURIComponent(
      message
    )}%0A${encodeURIComponent(subject)}`;

    // Open WhatsApp link in a new tab or window
    window.open(whatsappUrl, "_blank");
  };

  const triggerContactUs = () => {};

  return (
    <div className="contact-container" id="Contact">
      <div className="contact-left">
        {/* <img style={{ width: "100%", height: "100%" }} src={img} alt="" /> */}
        <Image
          style={{
            width: "80%",
            height: "80%",
            alignSelf: "center",
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
          src={img}
        />
      </div>
      <div className="contact-right">
        <div class="container mx-auto px-4 py-8">
          <h1 class="text-4xl font-bold text-fuchsia-600 underline">
            Contact Us
          </h1>
          <p class="mb-4 mt-4 text-pink-500 font-bold">
            We are always happy to hear from you. Please feel free to contact us
            with any questions or feedback.
          </p>

          <form action="/contact" method="post">
            <div class="mb-4">
              <label
                for="name"
                class="block text-fuchsia-700 text-xl font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                id="name"
                autocomplete="given-name"
                class="block w-full rounded-lg border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
              />
            </div>

            <div class="mb-4">
              <label
                for="email"
                class="block text-fuchsia-700 text-xl font-bold mb-2"
              >
                Email
              </label>
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                name="email"
                id="email"
                autocomplete="given-name"
                class="block w-full rounded-lg border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
              />
            </div>

            <div class="mb-4">
              <label
                for="message"
                class="block text-fuchsia-700 text-xl font-bold mb-2"
              >
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                name="message"
                id="message"
                rows="4"
                class="block w-full rounded-lg border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
              ></textarea>
            </div>
            {/* href={`https://wa.me/+919844290460?text=${encodeURIComponent(contactText)}`} */}

            <Link href={""}>
              <div
                onClick={handleFormSubmit}
                className="button-cont"
                style={{ padding: "1rem 0rem 3rem 0rem" }}
              >
                <div style={{ width: "100%" }} className="button i-button">
                  <span style={{ fontSize: "25px" }}>Submit</span>
                </div>
              </div>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default contactUs;
