const pools = `{
  pools (where: {
    publicSwap: true,
    active: true,
    tokensCount_gt: 1,
    swapsCount_gt: 0
  }){
		totalSwapVolume
    totalSwapFee
    liquidity
    swapsCount
    holdersCount
  }
}`;

export default pools;