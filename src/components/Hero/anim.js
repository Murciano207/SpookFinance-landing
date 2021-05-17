import styled from 'styled-components';
import { MediaQuery } from 'constants/MediaQuery';

import bg from '../../images/bg.png';

const HeroAnim = styled.div`
  position: fixed;
  /* background-color: #f0f; */
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -10;
  
  ${MediaQuery.md} {
    width: 60%;
  }
`;

const AnimBg = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: transparent url(${bg}) no-repeat center bottom;
  background-size: 100%;
  opacity: 0.9;
`;

const AnimSaturn = styled.div`
`;

const AnimAstronaut = styled.div`
`;


const AnimChains = styled.div`
`;


const AnimDefi = styled.div`
`;


const AnimStables = styled.div`
`;

export { HeroAnim, AnimBg, AnimSaturn, AnimAstronaut, AnimChains, AnimDefi, AnimStables };
