import styled, { keyframes } from 'styled-components';
import { MediaQuery } from 'constants/MediaQuery';

import bg from '../../images/bg.png';
import saturn from '../../images/saturn.png';
import astronaut from '../../images/astronaut.png';
import chains from '../../images/chains.png';
import defi from '../../images/defi.png';
import stables from '../../images/stables.png';

const FloatingAnimation = keyframes`
  0% { transform: translateY(0px); }
  100% { transform: translateY(5vh); }
`; 

const HeroAnim = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -10;
  
  ${MediaQuery.md} {
    width: 60%;
  }
`;

const AnimImg = styled.div`
  position: absolute;
  background: no-repeat center center;
  background-size: contain;
`;

const AnimBg = styled(AnimImg)`
  bottom: 0px;
  left: 0;
  height: 100%;
  width: 100%;
  background-image: url(${bg});
  background-position-y: bottom;
  opacity: 1;
  filter: brightness(1.1);
  background-blend-mode: luminosity;
`;

const AnimSaturn = styled(AnimImg)`
  display: none;
  background-image: url(${saturn});
  width: 100%;
  height: 171px;
  bottom: 0;

  ${MediaQuery.md} {
    display: unset;
    height: 15vh;
  }
`;

const AnimChains = styled(AnimImg)`
  background-image: url(${chains});
  height: 40vh;
  width: 40vh;
  top: 50vh;
  margin-top: -10vh;
  left: 0vh;
  filter: drop-shadow(0px 32px 20px #000c61);
`;

const AnimDefi = styled(AnimImg)`
  background-image: url(${defi});
  width: 45vh;
  height: 45vh;
  top: 15vh;
  right: 0vh;
  filter: drop-shadow(0px 32px 20px #000c61);
`;


const AnimStables = styled(AnimImg)`
  background-image: url(${stables});
  width: 20vh;
  height: 20vh;
  top: 12vh;
  left: 15vw;
  filter: drop-shadow(0px 32px 20px #000c61);
`;


const AnimAstronaut = styled(AnimImg)`
  background-image: url(${astronaut});
  width: 100%;
  height: 35vh;
  bottom: 20vh;
  filter: drop-shadow(0px 64px 32px #000c61);
  animation: 2s ease-in-out 0s infinite alternate both running ${FloatingAnimation};
`;

export { HeroAnim, AnimBg, AnimSaturn, AnimAstronaut, AnimChains, AnimDefi, AnimStables };
