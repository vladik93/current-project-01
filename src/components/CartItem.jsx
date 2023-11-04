import "./CartItem.css";
import React, { useEffect } from "react";
import ColoredImage from "./ColoredImage";

const CartItem = ({ item, removeFromCart }) => {
  const handleItemDelete = (itemId) => {
    removeFromCart(itemId);
  };

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
        <p className="cart-item-heading">${item.amount * item.price}</p>
      </div>
      <button
        className="button-icon cart-item-delete"
        onClick={() => handleItemDelete(item.id)}
      >
        <img src="./icons/close.svg" className="icon-sm" />
      </button>
    </div>
  );
};

export default CartItem;
