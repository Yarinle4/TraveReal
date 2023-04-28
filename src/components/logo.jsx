import React from "react";
import { Image } from "react-native"; // Import the Image component from react-native
import logo from "../assets/logo.png";

const logoImg = () => {
  return (
    <Image 
      source={logo}
      style={{ width: 300, height: 300, flex: 1 }} // Remove "px" from width and height as they are not needed in React Native
    />
  );
};

export default logoImg;
