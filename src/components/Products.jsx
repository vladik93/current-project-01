import "./Products.css";
import React from "react";
import Product from "./Product";

const Products = ({ products, changeColor }) => {
  return (
    <div className="products">
      {products &&
        products.map((product) => {
          return (
            <Product
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              amount={product.amount}
              colors={product.colors}
              changeColor={changeColor}
            />
          );
        })}
    </div>
  );
};

export default Products;
