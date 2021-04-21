import React from 'react';
import { BaseFooter, FooterContainer } from './styled';

import Stat from 'components/Stat/Stat';

const footer = () => { return (
  <BaseFooter>
    <FooterContainer>
      <Stat name="Yogi" value="TBA"/>
      <Stat name="Liquidity" value="TBA" />
      <Stat name="Volume" value="TBA" />
      <Stat name="Fees" value="TBA" />
      <Stat name="Pools" value="TBA" />
    </FooterContainer>
  </BaseFooter>
)};

export default footer;