import { MediaQuery } from 'constants/MediaQuery';
import styled from 'styled-components';

const BaseStat = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 600;

  & + & {
    padding-left: 2rem;
  }

  ${MediaQuery.md} {
    flex-direction: row;
  }
`;

const Name = styled.div`
  margin-bottom: .5rem;

  ${MediaQuery.md} {
    margin-right: .5rem;
  }
`;

const Value = styled.div`
  white-space: nowrap;
`;

export { BaseStat, Name, Value }
