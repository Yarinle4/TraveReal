import React from "react";
import './bgImg.css';
import imgg from "../assets/bgImg.png"

const BackgroundImagePage = () => {
  return (
    <div style={{ backgroundImage:`url(${imgg})` }}>
    </div>
  );
}

export default BackgroundImagePage;