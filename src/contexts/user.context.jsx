import { useState, createContext, useEffect } from "react";
import {
  onAuthStateChangedListener,
  signOutUser,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utilis";
//actual value you want to access
//Literal context
export const UserContext = createContext({
  CurrentUser: null,
  setCurrentUser: () => null,
});
//Provider è componente effettivo
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  signOutUser();
  useEffect(() => {
    const unSubscribe = onAuthStateChangedListener((user) => {
      if (user) createUserDocumentFromAuth(user);
      setCurrentUser(user);
    });
    return unSubscribe;
  }, []);
  const value = {
    currentUser,
    setCurrentUser,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
