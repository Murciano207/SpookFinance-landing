import { createContext, useState } from "react";

export const YogiContext = createContext(null);

const Context = ({ children }) => {
  const [price] = useState("TBA");
  const [liquidity] = useState(0);
  const [volume] = useState(0);
  const [pools] = useState(0);

  // TODO: setup context

  return (
    <YogiContext.Provider value={{ price, liquidity, volume, pools }} >
      {children}
    </YogiContext.Provider>
  );
};

export default Context;
