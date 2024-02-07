"use client"
import React from 'react'
import { useState,useEffect } from 'react';
import Link from "next/link";
import './hero.css'

const CustomModalBook = ({ isOpen, onClose }) => {
    const [shouldRender, setShouldRender] = useState(isOpen);
    const [isActive, setIsActive] = useState(isOpen);
  
    useEffect(() => {
      if (isOpen) {
        setShouldRender(true);
        requestAnimationFrame(() => setIsActive(true));
      } else {
        setIsActive(false);
        setTimeout(() => setShouldRender(false), 5000); // Match your transition duration
      }
    }, [isOpen]);
  
    if (!shouldRender) return null;
  
    return (
      <div className={`cust-modal-content2 ${isActive ? "active" : ""}`}>
        <p className="popup-header">Explore our Books</p>
        <div className="grand_cont">
          <div onClick={onClose} className="button-grad1 buy-button">
            close
          </div>
          <div className="hori-space"></div>
          <Link href="/components/books" className="button-grad1 buy-button">
            Open
          </Link>
        </div>
      </div>
    );
  };

export default CustomModalBook