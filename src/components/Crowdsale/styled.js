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
  font-weight: 700;
  margin-bottom: 1rem;

  ${MediaQuery.sm} {
    font-size: 3rem;
  }

  ${MediaQuery.lg} {
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

const CrowdsaleInstructions  = styled.div`
  line-height: 1.5rem;

  & + & {
    margin-top: 2rem;
  }
`

export {
  BaseCrowdsale,
  CrowdsaleTitle,
  CrowdsaleContent,
  CrowdsaleInstructions
};
