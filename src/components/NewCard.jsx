import "./NewCard.css";
import React, { useState, useEffect } from "react";
import Collapsible from "./Collapsible";

const NewCard = ({ addCard }) => {
  const [formData, setFormData] = useState({
    username: "",
    card_number: "",
    expr_date: null,
    cvv: "",
    save_card: false,
  });

  const onInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: typeof prevState[name] === "boolean" ? !prevState[name] : value,
      };
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    addCard(formData);
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <form className="new-card-form-container">
      <div className="new-card-form">
        <div className="new-card-title">
          <img src="./icons/credit_card.svg" className="icon-sm" />
          <h3>Credit/Debit Card</h3>
        </div>
        <div className="new-card-control">
          <label>Cardholder Name</label>
          <input
            type="text"
            name="username"
            className="new-card-input"
            onChange={onInputChange}
            value={formData.username}
          />
        </div>
        <div className="new-card-control">
          <label>Card Number</label>
          <input
            type="text"
            name="card_number"
            className="new-card-input"
            onChange={onInputChange}
            value={formData.card_number}
          />
        </div>
        <div className="new-card-input-container">
          <div className="new-card-control expr_date">
            <label>Expiration Date</label>
            <input
              type="date"
              name="expr-date"
              className="new-card-input"
              onChange={onInputChange}
              value={formData.expr_date}
            />
          </div>
          <div className="new-card-control ccv">
            <label>CVV</label>
            <input
              type="text"
              name="cvv"
              className="new-card-input"
              onChange={onInputChange}
              value={formData.cvv}
            />
          </div>
        </div>
      </div>
      <div className="new-card-form-footer">
        <div className="new-card-checkbox-control">
          <input
            type="checkbox"
            name="save_card"
            id="save-card"
            className="checkbox"
            onChange={onInputChange}
            value={formData.save_card}
          />
          <label htmlFor="save-card" className="text-sm">
            Save this card for faster payments
          </label>
        </div>
        <button
          className="new-card-button button"
          type="submit"
          onClick={onFormSubmit}
        >
          Add Card
        </button>
      </div>
    </form>
    // </div>
  );
};

export default NewCard;
