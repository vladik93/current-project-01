import "./Header.css";
import React from "react";

const Header = ({ toggleCart, isCart }) => {
  const onCartClick = () => {
    toggleCart();
  };

  return (
    <header className="header">
      {isCart ? (
        <>
          <button className="button-icon" onClick={onCartClick}>
            <img src="./icons/caret_left.svg" className="icon" />
          </button>
          <h3 className="heading-tertiary">My Cart</h3>
          <button className="button-icon">
            <img src="./icons/3-bars.svg" className="icon" />
          </button>
        </>
      ) : (
        <>
          <button className="button-icon" onClick={onCartClick}>
            <img src="./icons/cart.svg" className="icon" />
          </button>
          <h3 className="heading-tertiary">Store</h3>
          <button className="button-icon">
            <img src="./icons/3-bars.svg" className="icon" />
          </button>
        </>
      )}
    </header>
  );
};

export default Header;
