import "./Cart.css";
import React from "react";
import CartItem from "./CartItem";

const Cart = () => {
  return (
    <div className="cart">
      <div className="cart-panel">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className="cart-footer"></div>
    </div>
  );
};

export default Cart;
