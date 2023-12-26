"use client";
import React, { useState, useEffect } from "react";
import "./articleTopbar.css";
import { Link } from "react-scroll";

function ArticleTopbar() {
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
      cName: "nav-Links-a",
      toName: "Home",
    },

    {
      title: "Meditation",
      url: "/",
      cName: "nav-Links-a",
      toName: "Feats",
    },
    {
      title: "Ayurveda",
      url: "/",
      cName: "nav-Links-a",
      toName: "offerings",
    },
    {
      title: "Yoga",
      url: "/",
      cName: "nav-Links-a",
      toName: "quotes",
    },
    {
      title: "Personal Growth",
      url: "/",
      cName: "nav-Links-a",
      toName: "Gallery",
    },
    {
      title: "Nutrition & Recipes",
      url: "/",
      cName: "nav-Links-a",
      toName: "Gallery",
    },
    
  ];

  return (
    <nav className="navbar-Items-a">
      <h1 className="navbar-Logo-a">
        Jas Ahuja&rsquo;s
        <p> Articles</p>
      </h1>
      <div className="menu-Icons-a" onClick={handleClick}>
        <i
          className={clicked ? "fi fi-br-menu-burger" : "fi fi-sr-circle-xmark"}
        ></i>
      </div>

      <ul className={clicked ? "navbar-Menu-a" : "navbar-Menu-a active"}>
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link
              activeStyle={{
                textDecoration: "none",
                backgroundColor: "#EA698B",
                // borderBottom: "4px solid #2a9d8f",
                borderRadius: "50px",
                padding: "0.7rem 0rem",
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

export default ArticleTopbar;
