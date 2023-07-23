import { useState, createContext, useEffect } from "react";
import {} from "../utils/firebase/firebase.utilis";
//actual value you want to access
//Literal context
export const CartContext = createContext({
  productsList: null,
  setProductsList: () => null,
  toggle: false,
  setToggle: () => null,
});
//Provider è componente effettivo
export const CartProvider = ({ children }) => {
  const [productsList, setProductsList] = useState("");
  const [toggle, setToggle] = useState("");
  const value = {
    productsList,
    setProductsList,
    toggle,
    setToggle,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
