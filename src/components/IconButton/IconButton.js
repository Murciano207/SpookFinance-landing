import React from 'react';
import BaseIconButton from './styled';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IconButton = (props) => {
  
  return (
    <BaseIconButton href={props.href} target={props.target || "_blank"}>
      <FontAwesomeIcon icon={props.icon} />
    </BaseIconButton>
  )
};

export default IconButton;