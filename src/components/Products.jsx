import "./Products.css";
import React from "react";
import Product from "./Product";

const Products = ({
  products,
  changeColor,
  changeCartColor,
  changeStockAmount,
  addToCart,
  removeFromCart,
}) => {
  console.log("PRODUCTS ARRAY ====>");
  console.log(products);
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
              discount={product.discount}
              image={product.image}
              totalAmount={product.totalAmount}
              amountTaken={product.amountTaken}
              colors={product.colors}
              changeColor={changeColor}
              changeCartColor={changeCartColor}
              changeStockAmount={changeStockAmount}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          );
        })}
    </div>
  );
};

export default Products;
