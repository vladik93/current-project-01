import "./Product.css";
import React, { useState, useEffect } from "react";
import Color from "./Color";
import ColoredImage from "./ColoredImage";

const Product = ({
  id,
  title,
  price,
  totalAmount,
  amountTaken,
  colors,
  changeColor,
  changeStockAmount,
}) => {
  const [amount, setAmount] = useState(amountTaken);
  const [selectedColor, setSelectedColor] = useState({});

  const onDecrementClick = () => {
    if (amount > 0) {
      setAmount((prevState) => prevState - 1);
    }
  };

  const onIncrementClick = () => {
    if (amount < totalAmount) {
      setAmount((prevState) => prevState + 1);
    }
  };

  const getColor = () => {
    if (colors) {
      const color = colors.find((color) => color.isSelected === true);
      setSelectedColor(color);
    }
  };

  useEffect(() => {
    changeStockAmount(amount, id);
  }, [amount]);

  useEffect(() => {
    getColor();
  }, []);

  useEffect(() => {
    getColor();
  }, [colors]);

  return (
    <div className="product">
      <ColoredImage color={selectedColor}>
        <img
          src="images/product_1.jpg"
          className="image product-image"
          alt=""
        />
      </ColoredImage>
      <div className="product-details">
        <h2>{title}</h2>
        <h3>${price}</h3>
        <div className="product-colors">
          {colors &&
            colors.map((color, index) => {
              return (
                <Color
                  key={index}
                  id={index}
                  color={color.color}
                  isColorSelected={color.isSelected}
                  productId={id}
                  changeColor={changeColor}
                />
              );
            })}
        </div>
        <p className="product-amount">
          {`${amount} / ${totalAmount}`}
          {amount >= totalAmount ? <span>(Not In Stock)</span> : null}
        </p>
      </div>
      <div className="product-actions">
        <button className="product-button" onClick={() => onDecrementClick(id)}>
          <img src="./icons/minus_white.svg" className="icon" alt="" />
        </button>
        <button className="product-button" onClick={() => onIncrementClick(id)}>
          <img src="./icons/plus_white.svg" className="icon" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Product;
