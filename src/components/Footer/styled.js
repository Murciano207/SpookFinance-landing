import { MediaQuery } from 'constants/MediaQuery';
import styled from 'styled-components';

const BaseFooter = styled.footer`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  color: white;
  user-select: none;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  background-color: rgba(17, 24, 73, 1);

  ${MediaQuery.sm} {
    bottom: 1rem;
  }
`;

const FooterContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
  max-width: 960px;
  padding: 0 2rem;
  margin: 1.3rem auto .5rem;

  ${MediaQuery.sm} {
    justify-content: space-between;
  }

  ${MediaQuery.md} {
    padding: 0;
  }

  ${MediaQuery.lg} {
    max-width: 1186px;
  }

  ${MediaQuery.xl} {
    max-width: 1440px;
  }
`;

export { BaseFooter, FooterContainer };
