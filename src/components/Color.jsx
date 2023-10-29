import "./Color.css";
import React, { useState, useEffect } from "react";

const Color = ({ id, color, isColorSelected, productId, changeColor }) => {
  const handleColorClick = (id, productId) => {
    changeColor(id, productId);
  };

  return (
    <button
      className={`color ${color} ${isColorSelected ? "selected" : ""}`}
      onClick={() => handleColorClick(id, productId)}
    ></button>
  );
};

export default Color;
