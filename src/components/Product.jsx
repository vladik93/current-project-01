import "./Product.css";
import React from "react";
import Color from "./Color";
import Incrementer from "./Incrementer";

const Product = () => {
  return (
    <div className="product">
      <img src="images/product_1.jpg" className="image" />
      <div className="product-details">
        <h1>Title 1</h1>
        <h3>$25</h3>
        <div className="product-colors">
          <Color color="red" />
          <Color color="white" />
          <Color color="green" />
          <Color color="blue" />
        </div>
        <p>1 / 5</p>
      </div>
      <div className="product-actions">
        <Incrementer />
      </div>
    </div>
  );
};

export default Product;
