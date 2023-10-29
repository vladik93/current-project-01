import "./Incrementer.css";
import React from "react";

const Incrementer = () => {
  return (
    <div className="incrementer">
      <button className="product-button">
        <img src="./icons/minus_white.svg" className="icon" alt="" />
      </button>
      <button className="product-button">
        <img src="./icons/plus_white.svg" className="icon" alt="" />
      </button>
    </div>
  );
};

export default Incrementer;
