import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { BaseFooter, FooterContainer } from './styled';


import Stat from 'components/Stat/Stat';
import { YogiContext } from 'components/Context/Context';

const Footer = () => { 
  const context = useContext(YogiContext);
  const { t } = useTranslation();

  return (
    <BaseFooter>
      <FooterContainer>
        <Stat name="Yogi" value={`${context["price"]}`}/>
        <Stat name={t("Footer-Liquidity")} value={`${context["liquidity"]}`} />
        <Stat name={t("Footer-Volume")} value={`${context["volume"]}`} />
        <Stat name={t("Footer-Pools")} value={`${context["pools"]}`} />
      </FooterContainer>
    </BaseFooter>
  )
};

export default Footer;