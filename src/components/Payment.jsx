import "./Payment.css";
import React from "react";
import Collapsible from "./Collapsible";
import CreditCard from "./CreditCard";

const Payment = ({ creditCards, selectCreditCardById }) => {
  return (
    <div className="payment">
      {/* <button className="button-collapsible">Cash on Delivery</button> */}

      <Collapsible>
        {creditCards.map((card) => {
          return (
            <CreditCard {...card} selectCreditCardById={selectCreditCardById} />
          );
        })}
      </Collapsible>

      {/* <button>Net Banking</button> */}
    </div>
  );
};

export default Payment;
