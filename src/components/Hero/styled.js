import styled from 'styled-components';
import { MediaQuery } from 'constants/MediaQuery';

const BaseHero = styled.section`
  display: flex;
  justify-content: center;
  max-width: 960px;
  padding: .5rem 1rem;
  margin: 4rem auto;

  ${MediaQuery.sm} {
    padding: .5rem 2rem;
    margin: 6rem auto;
  }

  ${MediaQuery.md} {
    margin: 12vh auto;
    justify-content: space-between;
  }

  ${MediaQuery.lg} {
    padding: unset;
    max-width: 1186px;
  }

  ${MediaQuery.xl} {
    margin: 25vh auto 6rem;
    max-width: 1280px;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  max-width: 90%;

  ${MediaQuery.sm} {
    align-content: center;
    justify-content: center;
    text-align: center;
    max-width: 32rem;
  }

  ${MediaQuery.md} {
    text-align: left;
    width: 30rem;
  }
`;

const HeroTitle = styled.div`
  font-size: 2rem;
  line-height: 1.15;
  font-weight: 700;
  margin-bottom: 2rem;

  ${MediaQuery.sm} {
    font-size: 3rem;
  }

  ${MediaQuery.md} {
    font-size: 3.5rem;
  }
`;

const HeroDescription = styled.div`
  font-size: 1.2rem;
  line-height: 1.75rem;
`;

const HeroActions = styled.div`
  margin-top: 2.5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;

  ${MediaQuery.sm} {
    justify-content: space-between;
  }

  ${MediaQuery.md} {
    justify-content: flex-start;
  }
`;

const HeroActionGroup = styled.div`
  width: 100%;
  max-width: 18rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  & + & {
    margin-top: 2rem;
  }

  & * + * {
    margin-left: 1rem;
  }

  ${MediaQuery.sm} {
    width: unset;

    & + & {
      margin-top: unset;
    }    
  }

  ${MediaQuery.md} {
    width: 100%;
    max-width: unset;

    & + & {
      margin-top: 1.5rem;
    }

    & * + * {
      margin-left: 1.5rem;
    }
  }
`;

export { BaseHero, HeroContent, HeroTitle, HeroDescription, HeroActions, HeroActionGroup };
