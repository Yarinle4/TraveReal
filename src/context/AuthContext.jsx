import React, { useContext, createContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";

const UserContext = createContext();

export const UserAuth = () => {
  return useContext(UserContext);
};

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const signUp = (email, password) => {
    console.log("123");
    return createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const value = {
    currentUser,
    signUp,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
