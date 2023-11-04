import "./CartFooter.css";
import React, { useEffect } from "react";

const CartFooter = ({ getCartTotal }) => {
  useEffect(() => {
    console.log("GET CART TOTAL FUNC ====> ");
    getCartTotal();
  }, []);
  return (
    <div className="cart-footer">
      <h3>Price Details</h3>
      <div className="price-details">
        <div className="price-detail">
          <p>Total Product Price</p>
          <p>${getCartTotal()}</p>
        </div>
        <div className="price-detail">
          <p>Total Discounts</p>
          <p>$30</p>
        </div>
      </div>
      <div className="price-detail">
        <h3>Order Total</h3>
        <h3></h3>
      </div>
    </div>
  );
};

export default CartFooter;
