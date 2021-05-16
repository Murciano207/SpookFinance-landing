import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import {
  BaseCrowdsale,
  CrowdsaleContent,
  CrowdsaleAnim,
  CrowdsaleLogo,
  CrowdsaleTitle,
} from './styled';

import { useTranslation } from 'react-i18next';

import { TextButton } from 'components/Button/Button';
import YogiLogo from 'images/logo.svg';
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
        <div>
          <CrowdsaleTitle>{t('Crowdsale-Title')}</CrowdsaleTitle>
          <p>
            To participate you need to send BNB to the crowdsale contract. You
            will get YOGI in return. There are 5,000,000 YOGI to be distributed.
            This is 5% of the total network.
          </p>
        </div>
        <div>
          <p>YOGI rate</p>
          <p>1 YOGI = 0.001 BNB</p>
        </div>
        <div>
          <p>
            Crowdsale address:{' '}
            <TextButton
              href="https://bscscan.com/address/0x56bAb4AB4fbF2Fc35A5c4920F48388881acCB247"
              target="_blank"
              rel="noopener noreferrer"
            >
              0x56bAb4AB4fbF2Fc35A5c4920F48388881acCB247
            </TextButton>
          </p>
          <p>
            YOGI address:{' '}
            <TextButton
              href="https://bscscan.com/address/0x56bAb4AB4fbF2Fc35A5c4920F48388881acCB247"
              target="_blank"
              rel="noopener noreferrer"
            >
              0x56bAb4AB4fbF2Fc35A5c4920F48388881acCB247
            </TextButton>
          </p>
        </div>
        <p>Remaining YOGI: {yogiRemaining}</p>
      </CrowdsaleContent>
      <CrowdsaleAnim>
        <CrowdsaleLogo src={YogiLogo} alt="Yogi Logo" />
      </CrowdsaleAnim>
    </BaseCrowdsale>
  );
};

export default Crowdsale;
