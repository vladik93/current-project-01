import "./Products.css";
import React from "react";
import Product from "./Product";

const Products = () => {
  return (
    <div className="products">
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
};

export default Products;
