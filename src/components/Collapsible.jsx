import "./Collapsible.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CreditCard from "./CreditCard";

const Collapsible = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    setIsCollapsed((prevState) => !prevState);
  };

  const handleAddCardClick = () => {
    navigate("/add_card");
  };

  return (
    <div className="collapsible">
      <button className="button collapsible-button" onClick={handleClick}>
        <img src="./icons/credit_card.svg" className="icon" />
        <span>Credit/Debit Card</span>
        {isCollapsed ? (
          <img src="./icons/caret_up.svg" className="icon icon-caret" />
        ) : (
          <img src="./icons/caret_down.svg" className="icon icon-caret" />
        )}
      </button>

      {isCollapsed && (
        <div className="collapsible-content">
          {children}

          <button
            className="credit-card add-card button"
            onClick={handleAddCardClick}
          >
            <img src="./icons/plus_circle.svg" className="icon" />
            <span>Add Card</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Collapsible;
