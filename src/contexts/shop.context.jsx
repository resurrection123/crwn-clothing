import { useState, createContext, useEffect } from "react";
import {} from "../utils/firebase/firebase.utilis";
import SHOP_DATA from "../shop-data";
//actual value you want to access
//Literal context
export const ShopContext = createContext({
  products: null,
  setCurrentShop: () => null,
});
//Provider è componente effettivo
export const ShopProvider = ({ children }) => {
  const [products, setCurrentShop] = useState(SHOP_DATA[0].items);
  // useEffect(() => {
  //   const unSubscribe = (user) => {
  //     setCurrentShop(user);
  //   };
  //   return unSubscribe;
  // }, []);

  const value = {
    products,
    setCurrentShop,
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
