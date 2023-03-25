import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const createUsersEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const googleRegister = (provider) => {
    return signInWithPopup(auth, provider);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const updateUser = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };

  const logOut = () => {
    return signOut(auth);
  };
  const userInfo = {
    loginUser,
    user,
    logOut,
    updateUser,
    googleRegister,
    createUsersEmail,
  };
  return (
    <div>
      <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
