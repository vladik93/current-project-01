import "./Header.css";
import React from "react";

const Header = ({ toggleCart }) => {
  const onCartClick = () => {
    toggleCart();
  };

  return (
    <header className="header">
      <button className="button-icon">
        <img src="./icons/3-bars.svg" className="icon" />
      </button>
      <h3 className="heading-tertiary">Store Name</h3>
      <button className="button-icon" onClick={onCartClick}>
        <img src="./icons/cart.svg" className="icon" />
      </button>
    </header>
  );
};

export default Header;
