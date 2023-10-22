"use client";
import React, { useState, useEffect } from "react";
import "./topbar.css";
import { Link } from "react-scroll";

function Navbar() {
  const [clicked, setClicked] = useState(true);
  const [windowHeight, setWindowHeight] = useState(0);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleMenuClick = () => {
    setClicked(true);
  };

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

  // Define your menuItems as before
  const menuItems = [
    {
      title: "Home",
      url: "/",
      cName: "nav-Links",
      toName: "Home",
    },
    {
      title: "Quotes",
      url: "/",
      cName: "nav-Links",
      toName: "quotes",
    },
    {
      title: "Our Feats",
      url: "/",
      cName: "nav-Links",
      toName: "Feats",
    },
    {
      title: "Testimonials",
      url: "/",
      cName: "nav-Links",
      toName: "Gallery",
    },
    {
      title: "Offerings",
      url: "/",
      cName: "nav-Links",
      toName: "Retreat",
    },
    {
      title: "Contact Us",
      url: "/",
      cName: "nav-Links",
      toName: "Contact",
    },
  ];

  return (
    <nav className="navbar-Items">
      <h1 className="navbar-Logo">
        Jas Ahuja,s
        <p> Life Transformation Trainings & Retreats worldwide</p>
      </h1>
      <div className="menu-Icons" onClick={handleClick}>
        <i
          className={clicked ? "fi fi-br-menu-burger" : "fi fi-sr-circle-xmark"}
        ></i>
      </div>

      <ul className={clicked ? "navbar-Menu" : "navbar-Menu active"}>
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link
              activeStyle={{
                fontWeight: 700,
                fontFamily: "Poppins, sans-serif",
              }}
              to={item.toName}
              smooth={true}
              spy={true}
              activeClass="activeClass"
              offset={-windowHeight / 8}
            >
              <a className={item.cName} onClick={handleMenuClick}>
                {item.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
