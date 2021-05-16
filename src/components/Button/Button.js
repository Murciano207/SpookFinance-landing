import styled from 'styled-components';
import { Link } from "react-router-dom";

const AbstractButton = styled.a`
  cursor: pointer;
  border: none;
  outline: none;
  font-weight: 400;
  transition: all 0.1s ease-out;
  text-decoration: none;
  font-family: 'Fira', sans-serif;
`;

const PrimaryButton = styled(AbstractButton)`
  color: #fff;
  border: 2px solid #fff;
  border-radius: 2rem;
  padding: .5rem 2rem;

  &:hover {
    background: #fff;
    color: #000;
  }

  &:active {
    background: #000;
    color: #fff;
  }
`;

const TextButton = styled(AbstractButton)`
  color: #fff;

  &:hover {
    text-decoration: underline;
  }

  &:active {
    color: #17bf63;
  }
`;

const TextLink = styled(Link)`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &:active {
    color: #17bf63;
  }
`

export { PrimaryButton, TextButton, TextLink };
