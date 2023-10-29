import "./Product.css";
import React, { useState, useEffect } from "react";
import Color from "./Color";

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

  useEffect(() => {
    changeStockAmount(amount, id);
  }, [amount]);

  return (
    <div className="product">
      <img src="images/product_1.jpg" className="image" alt="" />
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
        <p>{`${amount} / ${totalAmount}`}</p>
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
