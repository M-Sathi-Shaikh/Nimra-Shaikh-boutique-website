import React, { createContext, useState } from "react";

export const BtcContext = createContext();

export const BtcProvider = ({ children }) => {
  const [btc, setBtc] = useState(0);

  const addBtc = (amount = 1) => {
    setBtc((prev) => prev + amount);
  };

  return (
    <BtcContext.Provider value={{ btc, addBtc }}>
      {children}
    </BtcContext.Provider>
  );
};
