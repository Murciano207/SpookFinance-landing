import { createContext, useState, useEffect } from "react";

import commarize from "utils/commarize";
import { fetchStats, fetchYogiPrice } from "utils/gqlHelpers";

const SUBGRAPHS = [
  "https://api.thegraph.com/subgraphs/name/yogi-fi/bsc",
  "https://api.thegraph.com/subgraphs/name/yogi-fi/polygon"
];

export const YogiContext = createContext(null);

const formatCurrency = (n, p = 2) => {
  return `$${commarize(n, p)}`;
}

const formatNumber = (n, p = 0) => {
  return commarize(n, p);
}

const getYogiPrice = async () => {
  const [bsc, polygon] = await Promise.all([fetchYogiPrice(SUBGRAPHS[0]), fetchYogiPrice(SUBGRAPHS[1])]);
  
  const prices = {
    bsc: Number(bsc['tokenPrices'][0]['price']),
    polygon: Number(polygon['tokenPrices'][0]['price'])
  }

  // TODO: should we use average instead of max?
  return formatCurrency(Math.max(prices.bsc, prices.polygon) || 0, 3);
}

const Context = ({ children }) => {
  const [price, setPrice] = useState("0");
  const [liquidity, setLiquidity] = useState("0");
  const [volume, setVolume] = useState("0");
  const [fees, setFees] = useState("0");
  const [swaps, setSwaps] = useState("0");
  const [pools, setPools] = useState("0");

  useEffect(() => {
    fetchPoolsData();
    const interval = setInterval(async () => {
      await fetchPoolsData();
    }, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const fetchPoolsData = async () => {
    console.log('pools data', Date.now());

    const price = await getYogiPrice();
    setPrice(price);
    
    let multichain = { 
      liquidity: 0,
      volume: 0,
      fees: 0,
      swaps: 0,
      pools: 0,
    };
     
    for (let i = 0; i < SUBGRAPHS.length; i++) {
      const data = await fetchStats(SUBGRAPHS[i]);
      
      multichain = data.pools.reduce(( acc, p ) => {
        acc.liquidity += Number(p.liquidity);
        acc.volume += Number(p.totalSwapVolume);
        acc.fees += Number(p.totalSwapFee);
        acc.swaps += Number(p.swapsCount);
        return acc;
      }, multichain);
      multichain.pools += data.pools.length;
    }

    setLiquidity(formatCurrency(multichain.liquidity));
    setVolume(formatCurrency(multichain.volume));
    setFees(formatCurrency(multichain.fees));
    setSwaps(formatNumber(multichain.swaps, 2));
    setPools(formatNumber(multichain.pools, 0));
  }
  
  return (
    <YogiContext.Provider value={{ price, liquidity, volume, fees, swaps, pools }} >
      {children}
    </YogiContext.Provider>
  );
};

export default Context;
