import "./CreditCard.css";
import React, { useState } from "react";

const CreditCard = ({ id, owner, bank, selected, selectCreditCardById }) => {
  const handleCardClick = (cardId) => {
    selectCreditCardById(cardId);
  };

  return (
    <button
      className={`credit-card button button-full ${selected ? "selected" : ""}`}
      onClick={() => handleCardClick(id)}
    >
      <img src="./logos/visa.png" className="logo" />
      <div className="credit-details">
        <span>{bank}</span>
        <span>**** 1234</span>
      </div>
      <span className="credit-checkbox"></span>
    </button>
  );
};

export default CreditCard;
