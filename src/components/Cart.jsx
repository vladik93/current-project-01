import "./Cart.css";
import React from "react";
import CartItem from "./CartItem";
import CartFooter from "./CartFooter";

const Cart = ({ cart, removeFromCart, cartDetails }) => {
  return (
    <>
      {cart && cart.length > 0 ? (
        <div className="cart">
          <div className="cart-panel">
            {cart.map((item, index) => {
              return (
                <CartItem
                  key={index}
                  item={item}
                  removeFromCart={removeFromCart}
                />
              );
            })}
          </div>
          <CartFooter cartDetails={cartDetails} />
        </div>
      ) : (
        <div className="cart empty">
          <p>Cart is empty</p>
        </div>
      )}
    </>
  );
};

export default Cart;
