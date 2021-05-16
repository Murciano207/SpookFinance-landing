import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import {
  BaseCrowdsale,
  CrowdsaleContent,
  CrowdsaleTitle,
  CrowdsaleInstructions
} from './styled';

import { useTranslation } from 'react-i18next';

import { TextButton } from 'components/Button/Button';
import ERC20 from './ERC20.json';

const Address= {
  Yogi: '0x56bAb4AB4fbF2Fc35A5c4920F48388881acCB247',
  Crowdsale: '0x56bAb4AB4fbF2Fc35A5c4920F48388881acCB247'
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
    <BaseCrowdsale>
      <CrowdsaleContent>
        <CrowdsaleTitle>{t('Crowdsale-Title')}</CrowdsaleTitle>
        <CrowdsaleInstructions>
          <div>{t('Crowdsale-1')}</div>
          <div>{t('Crowdsale-2')}</div>
        </CrowdsaleInstructions>

        <CrowdsaleInstructions>
          <div>Crowdsale address:</div>
          { ExplorerLink(Address.Crowdsale, Address.Crowdsale) }
        </CrowdsaleInstructions>

        <CrowdsaleInstructions>
          <div>1 YOGI = 0.001 BNB</div>
          <div>{t('Crowdsale-3', { remaining: yogiRemaining, total: "5,000,000" })}</div>
        </CrowdsaleInstructions>
      </CrowdsaleContent>
    </BaseCrowdsale>
  );
};

export default Crowdsale;
