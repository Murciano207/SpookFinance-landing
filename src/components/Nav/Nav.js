import React, { useState } from 'react';
import {
  BaseNav,
  BrandContainer,
  NavContainer,
  NavBar,
  NavLogo,
  NavActions,
  NavMenu,
  NavDropdown,
  NavDropdownBg,
  NavDropdownList,
  NavDropdownLink,
} from './styled';

import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Brand from 'components/Brand/Brand';
import { PrimaryButton, TextButton, TextLink } from 'components/Button/Button';

import YogiLogo from 'images/logo.svg';

const Nav = () => {
  const { t } = useTranslation();
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <BaseNav>
      <NavContainer>
        <NavBar>
          <TextLink to="/">
            <BrandContainer>
              <NavLogo src={YogiLogo} alt="Yogi Logo" />
              <Brand>Yogi</Brand>
            </BrandContainer>
          </TextLink>
          <NavMenu onClick={() => setShowDropdown(!showDropdown)}>
            <FontAwesomeIcon icon="bars" />
          </NavMenu>
        </NavBar>
        <NavActions>
          <TextButton href="https://docs.yogi.fi">{t('Nav-Docs')}</TextButton>
          <TextButton href="https://snapshot.org/#/yogi-fi.eth">{t('Nav-Vote')}</TextButton>
          <TextButton href="https://farms.yogi.fi">{t('Nav-Farms')}</TextButton>
          <TextButton href="https://pools.yogi.fi">{t('Nav-Pools')}</TextButton>
          <PrimaryButton href="https://exchange.yogi.fi">
            {t('Nav-Exchange')}
          </PrimaryButton>
        </NavActions>
      </NavContainer>

      <NavDropdown className={`${showDropdown ? 'active' : ''}`}>
        <NavDropdownBg />
        <NavDropdownList>
          <NavDropdownLink href="https://exchange.yogi.fi">
            {t('Nav-Exchange')}
          </NavDropdownLink>
          <NavDropdownLink href="https://pools.yogi.fi">
            {t('Nav-Pools')}
          </NavDropdownLink>
          <NavDropdownLink href="https://farms.yogi.fi">
            {t('Nav-Farms')}
          </NavDropdownLink>
          <NavDropdownLink href="https://snapshot.org/#/yogi-fi.eth">
            {t('Nav-Vote')}
          </NavDropdownLink>
          <NavDropdownLink href="https://docs.yogi.fi">
            {t('Nav-Docs')}
          </NavDropdownLink>
        </NavDropdownList>
      </NavDropdown>
    </BaseNav>
  );
};

export default Nav;
