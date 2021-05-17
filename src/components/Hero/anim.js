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
  opacity: 0.5;
  filter: brightness(1.1);
  background-blend-mode: luminosity;

  ${MediaQuery.md} {
    display: unset;
    filter: brightness(1.1);
    opacity: 1;
  }
`;

const AnimChains = styled(AnimImg)`
  display: none;
  background-image: url(${chains});
  height: 30vh;
  width: 30vh;
  top: 55vh;
  left: 2vw;
  filter: drop-shadow(0px 32px 20px #000c61);

  ${MediaQuery.sm} {
    display: unset;
  }

  ${MediaQuery.md} {
    height: 40vh;
    width: 40vh;
    top: 40vh;
    left: 0vh;
  }

  ${MediaQuery.xl} {
    width: 35vh;
    height: 35vh;
    top: 55vh;
  }
`;

const AnimDefi = styled(AnimImg)`
  display: none;
  background-image: url(${defi});
  width: 30vh;
  height: 30vh;
  top: 15vh;
  right: 2vw;
  filter: drop-shadow(0px 32px 20px #000c61);

  ${MediaQuery.sm} {
    display: unset;
  }

  ${MediaQuery.md} {
    width: 45vh;
    height: 45vh;
    top: 15vh;
    right: 0;
  }

  ${MediaQuery.xl} {
    width: 40vh;
    height: 40vh;
    top: 18vh;
  }
`;


const AnimStables = styled(AnimImg)`
  display: none;
  background-image: url(${stables});
  width: 15vh;
  height: 15vh;
  top: 12vh;
  left: 20vw;
  filter: drop-shadow(0px 32px 20px #000c61);

  ${MediaQuery.sm} {
    display: unset;
  }

  ${MediaQuery.md} {
    width: 20vh;
    height: 20vh;
    top: 12vh;
    left: 15vw;
  }

  ${MediaQuery.xl} {
    width: 18vh;
    height: 18vh;
    top: 15vh;
    left: 18vw;
  }
`;

const AnimAstronaut = styled(AnimImg)`
  background-image: url(${astronaut});
  width: 50%;
  right: 0;
  height: 35vh;
  bottom: 10vh;
  animation: 2s ease-in-out 0s infinite alternate-reverse both running ${FloatingAnimation};

  ${MediaQuery.sm} {
    display: none
  }

  ${MediaQuery.md} {
    display: unset;
    width: 100%;
    height: 35vh;
    filter: drop-shadow(0px 64px 32px #000c61);
  }
`;

const AnimSaturn = styled(AnimImg)`
  background-image: url(${saturn});
  width: 50%;
  height: 10vh;
  right: 0;
  bottom: 0;

  ${MediaQuery.sm} {
    display: none
  }

  ${MediaQuery.md} {
    display: unset;
    height: 15vh;
    width: 100%;
  }
`;

export { HeroAnim, AnimBg, AnimSaturn, AnimAstronaut, AnimChains, AnimDefi, AnimStables };
