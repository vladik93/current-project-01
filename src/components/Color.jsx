import "./Color.css";
import React from "react";

const Color = ({ color }) => {
  const handleColorClick = () => {
    console.log("color clicked");
  };

  return (
    <button className={`color ${color}`} onClick={handleColorClick}></button>
  );
};

export default Color;
