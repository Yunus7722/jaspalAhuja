"use client";

import React from "react";
import Link from "next/link";
import "./topbar.css";

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
      title: "About Us",
      url: "/",
      cName: "nav-Links",
      toName: "AboutUs",
    },
    {
      title: "Gallery",
      url: "/",
      cName: "nav-Links",
      toName: "WhoWeAre",
    },
    {
      title: "Retreat",
      url: "/",
      cName: "nav-Links",
      toName: "Solutions",
    },
    {
      title: "Contact Us",
      url: "/",
      cName: "nav-Links",
      toName: "ContactUs",
    },
  ];

  return (
    <nav className="navbar-Items">
      <h1 className="navbar-Logo">
        {/* <img height={50} src={webLogo} alt="logo" /> */}
        Jas Ahuja
      </h1>
      <div className="menu-Icons" onClick={handleClick}>
        <i className={clicked ? "fi fi-br-menu-burger" : "fi fi-sr-circle-xmark"}></i>
      </div>

      <ul className={clicked ? "navbar-Menu" : "navbar-Menu active"}>
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link href={item.url}>
              <span className={item.cName} onClick={handleMenuClick}>
                {item.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
