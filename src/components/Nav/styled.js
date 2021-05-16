import styled from 'styled-components';
import { MediaQuery } from 'constants/MediaQuery';

const BaseNav = styled.div`
  user-select: none;
  padding: 1rem 2rem;
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  max-width: 1000px;
  margin: 0 auto;
`;

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1; 

  ${MediaQuery.sm} {
    flex-grow: unset;
    justify-content: left;
  }
`;

const NavLogo = styled.img`
  max-width: 2.8rem;
  margin-right: .5rem;
`;

const NavActions = styled.div`
  display: none;
  
  ${MediaQuery.sm} {
    display: flex;
    align-items: center;
  }

  & * + * {
    margin-left: 2rem;
  }
`;

const NavMenu = styled.button`
  color: #fff;
  background: none;
  cursor: pointer;
  border: none;
  outline: none;
  padding: 1rem;

  ${MediaQuery.sm} {
    display: none;
  }
`;

const NavDropdown = styled.div`
  display: none;
  position: fixed;
  top: 4.5rem;
  left: 0;
  right: 0;
  height: 15rem;
  box-shadow: 0 6px 4px 0px rgba(0, 0, 0, .3);
  z-index: 10;
  overflow: hidden;

  &.active {
    display: unset;
  }

  ${MediaQuery.sm} {
    display: none !important;
  }
`;

const NavDropdownBg = styled.div`
  position: absolute;
  top: -4.5rem;
  width: 100vw;
  height: 100vh;
  background: radial-gradient(circle at 0% 0%, #46037f, #2b176d);
`;

const NavDropdownList = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 15rem;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const NavDropdownLink = styled.a`
  padding: 1rem 3rem;
  margin: .5rem 2rem;
  color: #fff;
  font-weight: 400;
  border: 4px solid #fff;
  text-decoration: none;
  border-radius: 2rem;
`; 

export { BaseNav, NavContainer, NavBar, NavLogo, NavActions, NavMenu, NavDropdown, NavDropdownBg, NavDropdownList, NavDropdownLink };
