import { useState, createContext, useEffect } from "react";
import {} from "../utils/firebase/firebase.utilis";
//actual value you want to access
//Literal context
export const addCartQuantityItem = (productsList, productToAdd) => {
  const existingCartItem = productsList.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return productsList.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...productsList, { ...productToAdd, quantity: 1 }];
};
export const removeCartQuantityItem = (productsList, removeProduct) => {
  console.log(removeProduct);
  const existingCartItem = productsList.find(
    (cartItem) => cartItem.id === removeProduct.id
  );
  console.log(existingCartItem);
  if (existingCartItem.quantity === 1) {
    return productsList.filter((el) => el.id !== removeProduct.id);
  }

  return productsList.map((el) => {
    return el.id === removeProduct.id
      ? { ...el, quantity: el.quantity - 1 }
      : el;
  });
};

export const removeCartItem = (productsList, deleteProduct) => {
  return productsList.filter((el) => el.id !== deleteProduct.id);
};

export const CartContext = createContext({
  productsList: [],
  setProductsList: () => null,
  toggle: false,
  setToggle: () => null,
  count: 0,
  setCount: () => null,
  removeQuantityItemFromCart: () => null,
  addQuantityItemToCart: () => null,
  removeItemFromCart: () => null,
  totalAmountCart: 0,
  setTotalAmountCart: () => null,
});
//Provider è componente effettivo
export const CartProvider = ({ children }) => {
  const [productsList, setProductsList] = useState([]);
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState("");
  const [totalAmountCart, setTotalAmountCart] = useState(0);

  const addQuantityItemToCart = (product) => {
    setProductsList(addCartQuantityItem(productsList, product));
  };
  useEffect(() => {
    const newCartCount = productsList.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCount(newCartCount);
  }, [productsList]);
  useEffect(() => {
    const newAmount = productsList.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );
    setTotalAmountCart(newAmount);
  }, [productsList]);

  const removeQuantityItemFromCart = (product) => {
    setProductsList(removeCartQuantityItem(productsList, product));
  };
  const removeItemFromCart = (product) => {
    setProductsList(removeCartItem(productsList, product));
  };

  const value = {
    productsList,
    setProductsList,
    toggle,
    setToggle,
    addQuantityItemToCart,
    count,
    removeQuantityItemFromCart,
    removeItemFromCart,
    totalAmountCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
