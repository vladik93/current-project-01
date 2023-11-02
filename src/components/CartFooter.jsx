import "./CartFooter.css";
import React from "react";

const CartFooter = () => {
  return (
    <div className="cart-footer">
      <h3>Price Details</h3>
      <div className="price-details">
        <div className="price-detail">
          <p>Total Product Price</p>
          <p>$1250</p>
        </div>
        <div className="price-detail">
          <p>Total Discounts</p>
          <p>$30</p>
        </div>
      </div>
      <div className="price-detail">
        <h3>Order Total</h3>
        <h3>$1280</h3>
      </div>
    </div>
  );
};

export default CartFooter;
