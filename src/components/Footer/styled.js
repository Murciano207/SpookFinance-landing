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
`;

const FooterContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
  max-width: 1000px;
  padding: 0 2rem 2rem;
  margin: 0 auto;

  ${MediaQuery.sm} {
    justify-content: space-between;
  }

  ${MediaQuery.md} {
    padding: 0 0 2rem;
  }
`;

export { BaseFooter, FooterContainer };
