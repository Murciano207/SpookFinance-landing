import { GraphQLClient, gql } from 'graphql-request';

export const fetchStats = async (subgraph) => {
  const client = new GraphQLClient(subgraph);

  const query = gql`
    {
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
    }
  `;

  return await client.request(query);
};

export const fetchYogiPrice = async (subgraph) => {
  const client = new GraphQLClient(subgraph);

  const query = gql`
    {
      tokenPrices(where: { id: "0x88888c8783a88ad40d995073ab7fbbe8d34acda8" }) {
        id
        symbol
        price
      }
    }
  `;

  return await client.request(query);
};