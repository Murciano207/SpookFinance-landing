import { createContext, useState, useEffect } from "react";
import query from './query';

import commarize from "utils/commarize";

const SUBGRAPH_URL = "https://api.thegraph.com/subgraphs/name/yogi-fi/yogi-subgraph";

export const YogiContext = createContext(null);

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
    const res = await fetch(SUBGRAPH_URL, {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: query })
    });
  
    const { data } = await res.json();
    
    const reduced = data.pools.reduce(( acc, p ) => {
      acc.liquidity += Number(p.liquidity);
      acc.volume += Number(p.totalSwapVolume);
      acc.fees += Number(p.totalSwapFee);
      acc.swaps += Number(p.swapsCount);
      return acc;
    }, { 
      liquidity: 0,
      volume: 0,
      fees: 0,
      swaps: 0,
    });

    // TODO: get Yogi price
    setPrice("TBA");
    setLiquidity(commarize(reduced.liquidity));
    setVolume(commarize(reduced.volume));
    setFees(commarize(reduced.fees));
    setSwaps(reduced.swaps);
    setPools(data.pools.length);
  }
  
  return (
    <YogiContext.Provider value={{ price, liquidity, volume, fees, swaps, pools }} >
      {children}
    </YogiContext.Provider>
  );
};

export default Context;
