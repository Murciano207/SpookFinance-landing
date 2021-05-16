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

const Crowdsale = () => {
  const { t } = useTranslation();
  const [yogiRemaining, setYogiRemaining] = useState('0');

  useEffect(() => {
    const main = async () => {
      const provider = new ethers.providers.JsonRpcProvider(
        'https://bsc-dataseed.binance.org/'
      );
      const yogiAddr = '0x56bAb4AB4fbF2Fc35A5c4920F48388881acCB247';
      const crowdsaleAddr = '0x56bAb4AB4fbF2Fc35A5c4920F48388881acCB247';
      const yogi = await new ethers.Contract(yogiAddr, ERC20, provider);
      const remaining = await yogi.balanceOf(crowdsaleAddr);
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
          <div>To participate you need to send BNB to the crowdsale contract.</div>
          <div>You will receive a proportional amount of {' '}
            <TextButton
              href="https://bscscan.com/address/0x56bAb4AB4fbF2Fc35A5c4920F48388881acCB247"
              target="_blank"
              rel="noopener noreferrer"
            >
              $YOGI
            </TextButton>
          </div>
        </CrowdsaleInstructions>

        <CrowdsaleInstructions>
          <div>Crowdsale address:</div>
          <TextButton
            href="https://bscscan.com/address/0x56bAb4AB4fbF2Fc35A5c4920F48388881acCB247"
            target="_blank"
            rel="noopener noreferrer"
          >
            0x56bAb4AB4fbF2Fc35A5c4920F48388881acCB247
          </TextButton>
        </CrowdsaleInstructions>

        <CrowdsaleInstructions>
          <div>1 YOGI = 0.001 BNB</div>
          <div>Remaining YOGI: {yogiRemaining} / 5,000,000</div>
        </CrowdsaleInstructions>
      </CrowdsaleContent>
    </BaseCrowdsale>
  );
};

export default Crowdsale;