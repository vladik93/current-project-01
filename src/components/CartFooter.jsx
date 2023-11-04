import "./CartFooter.css";
import React, { useEffect } from "react";

const CartFooter = ({ cartDetails }) => {
  return (
    <div className="cart-footer">
      <h3>Price Details</h3>
      <div className="price-details">
        <div className="price-detail">
          <p>Total Product Price</p>
          <p>${cartDetails.totalSum}</p>
        </div>
        <div className="price-detail">
          <p>Total Discounts</p>
          <p>${cartDetails.totalDiscount}</p>
        </div>
      </div>
      <div className="price-detail">
        <h3>Order Total</h3>
        <p>${cartDetails.totalSum - cartDetails.totalDiscount}</p>
      </div>
    </div>
  );
};

export default CartFooter;
