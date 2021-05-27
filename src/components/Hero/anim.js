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
  background-size: cover;
  opacity: 0.3;
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
  height: 20vw;
  width: 20vw;
  bottom: 15vh;
  left: 2vw;
  filter: drop-shadow(0px 32px 20px #000c61);

  ${MediaQuery.sm} {
    display: unset;
  }

  ${MediaQuery.md} {
    height: 15vw;
    width: 15vw;
    bottom: 20vh;
    left: 2vw;
  }

  ${MediaQuery.xl} {
    bottom: 15vh;
    width: 30vh;
    height: 30vh;
  }
`;

const AnimDefi = styled(AnimImg)`
  display: none;
  background-image: url(${defi});
  height: 25vw;
  width: 25vw;
  bottom: 45vh;
  right: 2vw;
  filter: drop-shadow(0px 32px 20px #000c61);

  ${MediaQuery.sm} {
    display: unset;
  }

  ${MediaQuery.md} {
    height: 18vw;
    width: 18vw;
    bottom: 35vh;
    right: 0;
  }
`;

const AnimStables = styled(AnimImg)`
  display: none;
  background-image: url(${stables});
  width: 10vw;
  height: 10vw;
  bottom: 70vh;
  left: 15vw;
  filter: drop-shadow(0px 32px 20px #000c61);

  ${MediaQuery.sm} {
    display: unset;
  }

  ${MediaQuery.md} {
    width: 10vw;
    height: 10vw;
    bottom: 65vh;
    left: 15vw;
  }

  ${MediaQuery.xl} {
    left: 18vw;
  }
`;

const AnimAstronaut = styled(AnimImg)`
  background-image: url(${astronaut});
  width: 50%;
  right: 0;
  height: 25vh;
  bottom: 10vh;
  animation: 2s ease-in-out 0s infinite alternate-reverse both running ${FloatingAnimation};

  ${MediaQuery.sm} {
    display: none
  }

  ${MediaQuery.md} {
    display: unset;
    width: 100%;
    bottom: 20vh;
    height: 35vh;
    filter: drop-shadow(0px 64px 32px #000c61);
  }

  ${MediaQuery.xl} {
    height: 30vh;
  }
`;

const AnimSaturn = styled(AnimImg)`
  background-image: url(${saturn});
  background-position-y: bottom;
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
