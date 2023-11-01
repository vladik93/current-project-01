import "./App.css";
import React, { useState, useEffect } from "react";
import { products as productsArr } from "./database";
import Products from "./components/Products";
import Header from "./components/Header";
import Cart from "./components/Cart";

function App() {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || productsArr
  );

  const [cart, setCart] = useState([]);

  const [isCart, setIsCart] = useState(false);

  const [selectedColor, setSelectedColor] = useState(null);

  const changeStockAmount = (amount, productId) => {
    setProducts((prevState) => {
      return prevState.map((product) => {
        if (product.id === productId) {
          return { ...product, amountTaken: amount };
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

  const toggleCart = () => {
    setIsCart((prevState) => !prevState);
  };

  const addToCart = (newItem) => {
    console.log(newItem);
    if (cart.length > 0) {
      cart.map((item) => {
        if (item.id === newItem.id) {
          let newObj = { ...item, amount: newItem.amount };
          let filteredArr = cart.filter((item) => item.id !== newItem.id);
          setCart([...filteredArr, newObj]);
        } else {
          setCart([...cart, newItem]);
        }
      });
    } else {
      setCart([newItem]);
    }
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  useEffect(() => {
    window.localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  return (
    <div className="App">
      <Header toggleCart={toggleCart} />
      {isCart ? (
        <Cart cart={cart} />
      ) : (
        <Products
          products={products}
          changeColor={changeColor}
          changeStockAmount={changeStockAmount}
          addToCart={addToCart}
        />
      )}
    </div>
  );
}

export default App;
