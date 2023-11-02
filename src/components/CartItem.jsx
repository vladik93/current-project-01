import "./CartItem.css";
import React, { useEffect } from "react";
import ColoredImage from "./ColoredImage";

const CartItem = ({ item }) => {
  useEffect(() => {
    console.log(item.selectedColor);
  }, []);
  return (
    <div className="cart-item">
      <ColoredImage color={item.selectedColor}>
        <img
          src={item.image}
          className="image-icon product-image cart-item-icon"
        />
      </ColoredImage>
      <div className="cart-item-details">
        <p className="cart-item-heading">{item.title}</p>
        <p className="cart-item-detail">Color: {item.selectedColor}</p>
        <p className="cart-item-detail">Quantity: {item.amount}</p>
        <p className="cart-item-heading">$350</p>
      </div>
      <button className="button-icon cart-item-delete">
        <img src="./icons/close.svg" className="icon-sm" />
      </button>
    </div>
  );
};

export default CartItem;
