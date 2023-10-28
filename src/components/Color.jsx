import "./Color.css";
import React, { useState } from "react";

const Color = ({ color, selected }) => {
  const [isSelected, setIsSelected] = useState(selected);
  const handleColorClick = () => {
    console.log("color clicked");
  };

  return (
    <button
      className={`color ${color} ${isSelected ? "selected" : ""}`}
      onClick={handleColorClick}
    ></button>
  );
};

export default Color;
