"use client";
import React, { useState, useEffect } from "react";
import "./topbar.css";
import { Link as ScrollLink} from "react-scroll";
import Link from "next/link";

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
      title: "Offerings",
      url: "/",
      cName: "nav-Links",
      toName: "offerings",
    },
    {
      title: "Articles",
      url: "/",
      cName: "nav-Links",
      toName: "quotes",
    },
    {
      title: "Books",
      url: "/",
      cName: "nav-Links",
      toName: "Feats",
    },
    {
      title: "Education",
      url: "/",
      cName: "nav-Links",
      toName: "Feats",
    },
    {
      title: "Events",
      url: "/",
      cName: "nav-Links",
      toName: "Gallery",
    },
    {
      title: "Shop",
      url: "/",
      cName: "nav-Links",
      toName: "Feats",
    },

    {
      title: "Jas Foundation",
      url: "/",
      cName: "nav-Links",
      toName: "Feats",
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
      {/* <h1 className="navbar-Logo">
        Jas Ahuja,s
        <p> Life Transformation Trainings & Retreats worldwide</p>
      </h1> */}
      <div className="menu-Icons" onClick={handleClick}>
        <i
          className={clicked ? "fi fi-br-menu-burger" : "fi fi-sr-circle-xmark"}
        ></i>
      </div>

      <ul className={clicked ? "navbar-Menu" : "navbar-Menu active"}>
        <li>
          <ScrollLink
            activeStyle={{
              textDecoration: "none",
              backgroundColor: "#EA698B",
              borderRadius: "50px",
              padding: "0.7rem 0rem",
            }}
            to="Home"
            smooth={true}
            spy={true}
            activeClass="activeClass"
          >
            <a className="nav-Links" onClick={handleMenuClick}>
              Home
            </a>
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            activeStyle={{
              textDecoration: "none",
              backgroundColor: "#EA698B",
              borderRadius: "50px",
              padding: "0.7rem 0rem",
            }}
            to="offerings"
            smooth={true}
            spy={true}
            activeClass="activeClass"
          >
            <a className="nav-Links" onClick={handleMenuClick}>
              Offerings
            </a>
          </ScrollLink>
        </li>
        {/* Add other menu items in a similar way */}

        <li>
        <Link
           onClick={handleMenuClick}
           className="nav-Links"
          href='/components/articles'
          >
            Articles
          </Link>
        </li>
        <li>
        <Link
           onClick={handleMenuClick}
           className="nav-Links"
          href='/components/books'
          >
            Books
          </Link>
        </li>
        {/* Add other menu items in a similar way */}

        <li>
        <Link
           onClick={handleMenuClick}
           className="nav-Links"
          href='/components/education'
          >
            Education
          </Link>
        </li>
        <li>
          <ScrollLink
            activeStyle={{
              textDecoration: "none",
              backgroundColor: "#EA698B",
              borderRadius: "50px",
              padding: "0.7rem 0rem",
            }}
            to="upComingEvents"
            smooth={true}
            spy={true}
            activeClass="activeClass"
          >
            <a className="nav-Links" onClick={handleMenuClick}>
              Events
            </a>
          </ScrollLink>
        </li>
        {/* Add other menu items in a similar way */}

        <li>
          <Link
           onClick={handleMenuClick}
           className="nav-Links"
          href='/components/products'
          >
            Shop
          </Link>
        </li>
        <li>
          <ScrollLink
            activeStyle={{
              textDecoration: "none",
              backgroundColor: "#EA698B",
              borderRadius: "50px",
              padding: "0.7rem 0rem",
            }}
            to="Feats"
            smooth={true}
            spy={true}
            activeClass="activeClass"
          >
            <a className="nav-Links" onClick={handleMenuClick}>
              Jas Foundation
            </a>
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            activeStyle={{
              textDecoration: "none",
              backgroundColor: "#EA698B",
              borderRadius: "50px",
              padding: "0.7rem 0rem",
            }}
            to="Contact"
            smooth={true}
            spy={true}
            activeClass="activeClass"
          >
            <a className="nav-Links" onClick={handleMenuClick}>
              Contact Us
            </a>
          </ScrollLink>
        </li>
        {/* Add other menu items in a similar way */}
      </ul>
    </nav>
  );
}

export default Navbar;
