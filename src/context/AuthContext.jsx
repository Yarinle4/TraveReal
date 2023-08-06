import React, { useContext, createContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  getAuth,
  sendPasswordResetEmail, // Import the function for password reset
} from "firebase/auth";
import { auth, db } from "../firebase";
import { addDoc, collection, setDoc, doc } from "firebase/firestore";

const UserContext = createContext();

export const UserAuth = () => {
  return useContext(UserContext);
};

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  const addToUserdb = (user_details) => {
    try {
      const auth = getAuth();
      const user = auth.currentUser;

      const user_col_ref = collection(db, "users");
      setDoc(doc(user_col_ref, "user_" + user.uid), {
        firstName: user_details.firstName,
        lastName: user_details.lastName,
        country: user_details.country,
        email: user_details.email,
        uid: user.uid,
      });
    } catch (e) {
      console.log(e);
    }
  };
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
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
    addToUserdb,
    signIn,
    logout,
    resetPassword, // Include the resetPassword function in the context
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
