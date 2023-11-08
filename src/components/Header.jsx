import "./Header.css";
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = ({ toggleCart, isCart }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [content, setContent] = useState({
    icon: "cart",
    title: "Products",
    toUrl: "/cart",
  });

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setContent({ icon: "cart", title: "Products", toUrl: "/cart" });
        return;
      case "/cart":
        setContent({ icon: "caret_left", title: "Cart", toUrl: "/" });
        return;
      case "/payment":
        setContent({ icon: "cart", title: "Payment", toUrl: "/cart" });
        return;
    }
  }, [location.pathname]);

  return (
    <header className="header">
      <button className="button-icon" onClick={() => navigate(content.toUrl)}>
        <img src={`./icons/${content.icon}.svg`} className="icon" />
      </button>
      <h3 className="heading-tertiary">{content.title}</h3>
      <button className="button-icon">
        <img src="./icons/3-bars.svg" className="icon" />
      </button>
    </header>
  );
};

export default Header;
