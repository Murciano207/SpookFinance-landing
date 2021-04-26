import { createContext, useState, useEffect } from "react";

export const YogiContext = createContext(null);

const Context = ({ children }) => {
  const [price, setPrice] = useState("TBA");
  const [liquidity, setLiquidity] = useState(0);
  const [volume, setVolume] = useState(0);
  const [pools, setPools] = useState(0);

  // TODO: setup context

  return (
    <YogiContext.Provider value={{ price, liquidity, volume, pools }} >
      {children}
    </YogiContext.Provider>
  );
};

export default Context;
