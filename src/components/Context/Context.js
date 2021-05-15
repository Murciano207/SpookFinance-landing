import { createContext, useState, useEffect } from "react";
import query from './query';

import commarize from "utils/commarize";

const SUBGRAPHS = [
  "https://api.thegraph.com/subgraphs/name/yogi-fi/yogi-subgraph",
  "https://api.thegraph.com/subgraphs/name/yogi-fi/bsc",
  "https://api.thegraph.com/subgraphs/name/yogi-fi/polygon"
];

export const YogiContext = createContext(null);

const formatCurrency = (n) => {
  return `$${commarize(n)}`;
}

const formatNumber = (n) => {
  return commarize(n, 0);
}

const Context = ({ children }) => {
  const [price, setPrice] = useState("TBA");
  const [liquidity, setLiquidity] = useState("0");
  const [volume, setVolume] = useState("0");
  const [fees, setFees] = useState("0");
  const [swaps, setSwaps] = useState("0");
  const [pools, setPools] = useState("0");

  useEffect(() => {
    fetchPoolsData();
  }, []);

  const fetchPoolsData = async () => {
    let multichain = { 
      liquidity: 0,
      volume: 0,
      fees: 0,
      swaps: 0,
      pools: 0,
    };
     
    for (let i = 0; i < SUBGRAPHS.length; i++) {
      const res = await fetch(SUBGRAPHS[i], {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: query })
      });
    
      const { data } = await res.json();

      multichain = data.pools.reduce(( acc, p ) => {
        acc.liquidity += Number(p.liquidity);
        acc.volume += Number(p.totalSwapVolume);
        acc.fees += Number(p.totalSwapFee);
        acc.swaps += Number(p.swapsCount);
        return acc;
      }, multichain);
      multichain.pools += data.pools.length;
    }
    
    // TODO: get Yogi price
    setPrice("TBA");
    setLiquidity(formatCurrency(multichain.liquidity));
    setVolume(formatCurrency(multichain.volume));
    setFees(formatCurrency(multichain.fees));
    setSwaps(formatNumber(multichain.swaps));
    setPools(formatNumber(multichain.pools));
  }
  
  return (
    <YogiContext.Provider value={{ price, liquidity, volume, fees, swaps, pools }} >
      {children}
    </YogiContext.Provider>
  );
};

export default Context;
