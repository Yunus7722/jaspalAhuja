"use client"
import React from "react";
import {HashLoader} from 'react-spinners'

function Spinner() {
  return (
    <div className="spinner">
      <HashLoader color="#b836d6" />
    </div>
  );
}

export default Spinner;
