import "./CartItem.css";
import React, { useEffect } from "react";
import ColoredImage from "./ColoredImage";

const CartItem = ({ item }) => {
  useEffect(() => {
    console.log("CART ITEM ====>");
    console.log(item);
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
        <p>{item.title}</p>
        <p>{item.amount}</p>
        <p>{item.selectedColor}</p>
      </div>
      <button className="button-icon cart-item-delete">X</button>
    </div>
  );
};

export default CartItem;
