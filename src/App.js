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

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const [isCart, setIsCart] = useState(false);

  // const [selectedColor, setSelectedColor] = useState(null);

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
    if (cart.length > 0) {
      let foundItem = cart.find((x) => x.id === newItem.id);
      if (foundItem) {
        let filteredArr = cart.filter((x) => x.id !== newItem.id);
        setCart([...filteredArr, newItem]);
      } else {
        setCart((prevState) => [...prevState, newItem]);
      }
    } else {
      setCart([newItem]);
    }
  };

  const removeFromCart = (productId, callback) => {
    setCart((prevState) => prevState.filter((x) => x.id !== productId));
  };

  const resetProductCount = () => {
    console.log("resetProductCount =====>");
    setProducts((prevState) => {
      return prevState.map((product) => {
        let foundInCart = cart.find((item) => item.id === product.id);

        if (!foundInCart) {
          return { ...product, amountTaken: 0 };
        } else {
          return product;
        }
      });
    });
  };

  const changeCartColor = (productId, color) => {
    setCart((prevState) =>
      prevState.map((item) => {
        if (item.id === productId) {
          return {
            ...item,
            selectedColor: color.color,
          };
        } else {
          return item;
        }
      })
    );
  };

  const getCartTotal = () => {
    console.log("getCartTotal ===>");
    let totalSum = cart.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.amount * currentValue.price;
    }, 0);

    return totalSum;
  };

  useEffect(() => {
    resetProductCount();
  }, [cart]);

  useEffect(() => {
    getCartTotal();
  }, [cart]);

  useEffect(() => {
    window.localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="App">
      <Header toggleCart={toggleCart} isCart={isCart} />
      {isCart ? (
        <Cart
          cart={cart}
          removeFromCart={removeFromCart}
          getCartTotal={getCartTotal}
        />
      ) : (
        <Products
          products={products}
          changeColor={changeColor}
          changeCartColor={changeCartColor}
          changeStockAmount={changeStockAmount}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      )}
    </div>
  );
}

export default App;
