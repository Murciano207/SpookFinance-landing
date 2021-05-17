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
  Yogi: '0x56bAb4AB4fbF2Fc35A5c4920F48388881acCB247',
  Crowdsale: '0xefdE434792bd92f8b0F3d901416A363FA5331E74'
}

const ExplorerLink = (address, label) => {
  return (
    <TextButton
      href={`https://bscscan.com/address/${address}}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </TextButton>
  )
}

const Crowdsale = () => {
  const { t } = useTranslation();
  const [yogiRemaining, setYogiRemaining] = useState('0');

  useEffect(() => {
    const main = async () => {
      const provider = new ethers.providers.JsonRpcProvider('https://bsc-dataseed.binance.org/');
      const yogi = await new ethers.Contract(Address.Yogi, ERC20, provider);
      const remaining = await yogi.balanceOf(Address.Crowdsale);
      setYogiRemaining(
        Number(ethers.utils.formatEther(remaining.toString())).toFixed(2)
      );
    };

    main();
  });

  return (
    <BaseHero>
      <HeroContent>
        <HeroTitle>{t('Crowdsale-Title')}</HeroTitle>
        <CrowdsaleInstructions>
          {t('Crowdsale-Instructions')}
        </CrowdsaleInstructions>

        <CrowdsaleInstructions>
          <div>Crowdsale address:</div>
          { ExplorerLink(Address.Crowdsale, Address.Crowdsale) }
        </CrowdsaleInstructions>

        <CrowdsaleInstructions>
          <div>1 YOGI = 0.001 BNB</div>
          <div>{t('Crowdsale-Remaining', { remaining: yogiRemaining, total: "5,000,000" })}</div>
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

export default Crowdsale;
