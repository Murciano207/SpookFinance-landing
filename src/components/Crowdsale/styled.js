import styled from 'styled-components';
import { MediaQuery } from 'constants/MediaQuery';

const BaseCrowdsale = styled.section`
  display: flex;
  justify-content: center;
  max-width: 1000px;
  padding: 0.5rem 1rem;
  margin: 4rem auto;

  ${MediaQuery.sm} {
    padding: 0.5rem 2rem;
    margin: 6rem auto;
  }

  ${MediaQuery.md} {
    margin: 12vh auto;
    justify-content: space-between;
  }

  ${MediaQuery.lg} {
    padding: unset;
  }

  ${MediaQuery.xl} {
    margin: 25vh auto 6rem;
  }
`;

const CrowdsaleTitle = styled.div`
  font-size: 2rem;
  line-height: 1.15;
  font-weight: 700;

  ${MediaQuery.sm} {
    font-size: 3rem;
  }

  ${MediaQuery.md} {
    font-size: 3.5rem;
  }
`;

const CrowdsaleContent = styled.div`
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
    width: 32rem;
  }
`;

const CrowdsaleAnim = styled.div`
  position: relative;
  display: none;

  ${MediaQuery.md} {
    display: flex;
    align-items: center;
  }
`;

const CrowdsaleLogo = styled.img`
  width: 20rem;
  filter: drop-shadow(0 8px 1px rgba(6, 45, 56, 0.7));
`;

export {
  BaseCrowdsale,
  CrowdsaleTitle,
  CrowdsaleContent,
  CrowdsaleAnim,
  CrowdsaleLogo,
};
