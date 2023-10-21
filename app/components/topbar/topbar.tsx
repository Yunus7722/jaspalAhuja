"use client";

import React from "react";
// import Link from "next/link";
import "./topbar.css";
import { Link } from "react-scroll";

function Navbar() {
  const [clicked, setClicked] = React.useState(true);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleMenuClick = () => {
    setClicked(true);
  };

  // Define the menu items as an array within the component
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
        {/* <img height={50} src={webLogo} alt="logo" /> */}
        Jas Ahuja's
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
                // textDecoration: "none",
                // borderBottom: "4px solid #2a9d8f",
                fontWeight: 700,
                fontFamily: "Poppins, sans-serif",
              }}
              to={item.toName}
              smooth={true}
              spy={true}
              activeClass="activeClass"
              // offset={-window.innerHeight / 8}
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
