import "./Cart.css";
import React from "react";
import CartItem from "./CartItem";
import CartFooter from "./CartFooter";

const Cart = ({ cart }) => {
  return (
    <div className="cart">
      <div className="cart-panel">
        {cart.map((item, index) => {
          return <CartItem key={index} item={item} />;
        })}
      </div>
      <CartFooter />
    </div>
  );
};

export default Cart;
