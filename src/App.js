import "./App.css";
import React, { useState, useEffect } from "react";
import { products as productsArr } from "./database";
import Products from "./components/Products";

function App() {
  const [products, setProducts] = useState(productsArr);

  const changeStockAmount = (amount, productId) => {
    setProducts((prevState) => {
      return prevState.map((product) => {
        if (product.id === productId) {
          return { ...product, totalAmount: product.totalAmount - amount };
        } else {
          return product;
        }
      });
    });
  };

  const changeColor = (colorId, productId) => {
    setProducts((prevState) => {
      return prevState.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            colors: product.colors.map((color, index) => {
              if (index === colorId) {
                return { ...color, isSelected: true };
              } else {
                return { ...color, isSelected: false };
              }
            }),
          };
        } else {
          return product;
        }
      });
    });
  };

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <div className="App">
      <Products
        products={products}
        changeColor={changeColor}
        changeStockAmount={changeStockAmount}
      />
    </div>
  );
}

export default App;
