"use client";
import { SessionProvider } from "next-auth/react";
import { createContext, useState } from "react";

const CartContext = createContext({});

const AppProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  function addToCart(product, size = null, extras = []) {
    setCartProducts((prevProducts) => {
      const cartProduct = { ...product, size, extras };
      const newProducts = [...prevProducts, cartProduct];

      return newProducts;
    });
  }

  return (
    <SessionProvider>
      <CartContext.Provider value={{ cartProducts, setCartProducts }}>
        {children}
      </CartContext.Provider>
    </SessionProvider>
  );
};

export default AppProvider;
