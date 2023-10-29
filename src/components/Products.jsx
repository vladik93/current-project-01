import "./Products.css";
import React from "react";
import Product from "./Product";

const Products = ({ products, changeColor, changeStockAmount }) => {
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
              totalAmount={product.totalAmount}
              colors={product.colors}
              changeColor={changeColor}
              changeStockAmount={changeStockAmount}
            />
          );
        })}
    </div>
  );
};

export default Products;
