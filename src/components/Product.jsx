import "./Product.css";
import React, { useState, useEffect } from "react";
import Color from "./Color";
import ColoredImage from "./ColoredImage";

const Product = ({
  id,
  title,
  price,
  image,
  totalAmount,
  amountTaken,
  colors,
  changeColor,
  changeCartColor,
  changeStockAmount,
  addToCart,
  removeFromCart,
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
    if (!amount) {
      removeFromCart(id);
    }
  }, [amount]);

  useEffect(() => {
    getColor();
  }, []);

  useEffect(() => {
    getColor();
  }, [colors]);

  useEffect(() => {
    changeCartColor(id, selectedColor);
  }, [selectedColor]);

  useEffect(() => {
    if (amount > 0) {
      addToCart({
        id,
        title,
        price,
        image,
        amount,
        selectedColor: selectedColor.color,
      });
    }
  }, [amount]);

  useEffect(() => {
    console.log("IMAGE PROP =====> ");
    console.log(image);
  }, []);

  return (
    <div className="product">
      <ColoredImage color={selectedColor}>
        <img src={image} className="image product-image" alt="" />
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
