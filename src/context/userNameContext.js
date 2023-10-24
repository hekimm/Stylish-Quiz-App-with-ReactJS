// UserNameContext.js
import React, { createContext, useState, useContext } from "react";

const UserNameContext = createContext();

export const UserNameProvider = ({ children }) => {
  const [userName, setUserName] = useState("");

  return (
    <UserNameContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserNameContext.Provider>
  );
};

export const useUserName = () => {
  return useContext(UserNameContext);
};
