import "./Cart.css";
import React from "react";
import CartItem from "./CartItem";

const Cart = ({ cart }) => {
  return (
    <div className="cart">
      <div className="cart-panel">
        {cart.map((item) => {
          return <CartItem item={item} />;
        })}
      </div>
      <div className="cart-footer"></div>
    </div>
  );
};

export default Cart;
