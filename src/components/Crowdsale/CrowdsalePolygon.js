import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import {
  CrowdsaleInstructions
} from './styled';

import {
  BaseHero,
  HeroTitle,
  HeroContent,
} from '../Hero/styled'

import { HeroAnim, AnimBg, AnimSaturn, AnimAstronaut, AnimChains, AnimDefi, AnimStables } from '../Hero/anim';

import { useTranslation } from 'react-i18next';

import { TextButton } from 'components/Button/Button';
import ERC20 from './ERC20.json';

const Address= {
  Yogi: '0x88888C8783a88aD40d995073Ab7FBbe8d34aCdA8',
  Crowdsale: '0x2f0F9069431fB06a51607a9b2eFbF5826Ff60927'
}

const ExplorerLink = (address, label) => {
  return (
    <TextButton
      href={`https://explorer.matic.network/address/${address}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </TextButton>
  )
}

const CrowdsalePolygon = () => {
  const { t } = useTranslation();
  const [yogiRemaining, setYogiRemaining] = useState('0');
  const [yogiTotal, setYogiTotal] = useState('0');

  useEffect(() => {
    fetchYogiBalance();
  }, []);

  const fetchYogiBalance = async () => {
    const provider = new ethers.providers.JsonRpcProvider('https://rpc-mainnet.maticvigil.com/');
    const yogi = await new ethers.Contract(Address.Yogi, ERC20, provider);
    const remaining = await yogi.balanceOf(Address.Crowdsale);
    setYogiRemaining(
      Number(ethers.utils.formatEther(remaining.toString())).toLocaleString()
    );
    setYogiTotal(Number(5000000).toLocaleString());
  };
  
  return (
    <BaseHero>
      <HeroContent>
        <HeroTitle>{t('Crowdsale-Title', { chain: 'Polygon'})}</HeroTitle>
        <CrowdsaleInstructions>
          {t('Crowdsale-Instructions', { native: 'MATIC'})}
        </CrowdsaleInstructions>

        <CrowdsaleInstructions>
          <div>Crowdsale address:</div>
          { ExplorerLink(Address.Crowdsale, Address.Crowdsale) }
          <div>Recommended gas limit: > {Number(70000).toLocaleString()}</div>
        </CrowdsaleInstructions>

        <CrowdsaleInstructions>
          <div>1 YOGI = 0.2 MATIC</div>
          <div>{t('Crowdsale-Remaining', { remaining: yogiRemaining, total: yogiTotal })}</div>
        </CrowdsaleInstructions>
      </HeroContent>
      <HeroAnim>
        <AnimBg />
        <AnimChains />
        <AnimDefi />
        <AnimStables />
        <AnimSaturn />
        <AnimAstronaut />
      </HeroAnim>
    </BaseHero>
  );
};

export default CrowdsalePolygon;
