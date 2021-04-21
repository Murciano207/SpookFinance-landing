import React from 'react';
import { BaseStat, Name, Value } from './styled';

const Stat = (props) => { return (
  <BaseStat className={props.className}>
    <Name>{props.name}:</Name>
    <Value>{props.value}</Value>
  </BaseStat>
)};

export default Stat;