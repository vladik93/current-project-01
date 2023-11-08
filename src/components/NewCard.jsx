import "./NewCard.css";
import React from "react";
import Collapsible from "./Collapsible";

const NewCard = () => {
  return (
    // <div className="new-card">
    <form className="new-card-form-container">
      <div className="new-card-form">
        <div className="new-card-title">
          <img src="./icons/credit_card.svg" className="icon-sm" />
          <h3>Credit/Debit Card</h3>
        </div>
        <div className="new-card-control">
          <label>Cardholder Name</label>
          <input type="text" className="new-card-input" />
        </div>
        <div className="new-card-control">
          <label>Card Number</label>
          <input type="text" className="new-card-input" />
        </div>
        <div className="new-card-input-container">
          <div className="new-card-control expr-date">
            <label>Expiration Date</label>
            <input type="text" className="new-card-input" />
          </div>
          <div className="new-card-control ccv">
            <label>CVV</label>
            <input type="text" className="new-card-input" />
          </div>
        </div>
      </div>
      <div className="new-card-form-footer">
        <div className="new-card-checkbox-control">
          <input type="checkbox" id="save-card" className="checkbox" />
          <label htmlFor="save-card" className="text-sm">
            Save this card for faster payments
          </label>
        </div>
        <button className="new-card-button button">Pay Now</button>
      </div>
    </form>
    // </div>
  );
};

export default NewCard;
