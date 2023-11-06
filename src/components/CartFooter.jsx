import "./CartFooter.css";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CartFooter = ({ cartDetails }) => {
  const navigate = useNavigate();

  const handleContinueClick = () => {
    navigate("/payment");
  };

  return (
    <div className="cart-footer">
      <h3>Price Details</h3>
      <div className="price-details text-sm">
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
      <button
        className="button cart-footer-button"
        onClick={handleContinueClick}
      >
        CONTINUE
      </button>
    </div>
  );
};

export default CartFooter;
