import { MediaQuery } from 'constants/MediaQuery';
import styled from 'styled-components';

const BaseStat = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 600;
  padding: 0 1.5rem;
  
  ${MediaQuery.md} {
    flex-direction: row;
    padding: 0;
  }
`;

const Name = styled.div`
  margin-bottom: .5rem;

  ${MediaQuery.md} {
    margin-right: .5rem;
    margin-bottom: unset;
  }
`;

const Value = styled.div`
  white-space: nowrap;
`;

export { BaseStat, Name, Value }
