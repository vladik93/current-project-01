import "./Product.css";
import React, { useState } from "react";
import Color from "./Color";
import Incrementer from "./Incrementer";

const Product = ({ id, title, price, amount, colors, changeColor }) => {
  const [amountSelected, setAmountSelected] = useState(0);
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
        <p>{`${amountSelected} / ${amount}`}</p>
      </div>
      <div className="product-actions">
        <Incrementer />
      </div>
    </div>
  );
};

export default Product;
