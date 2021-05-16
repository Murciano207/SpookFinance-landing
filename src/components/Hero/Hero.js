import React from 'react';
import { BaseHero, HeroContent, HeroTitle, HeroDescription, HeroActions, HeroActionGroup, HeroAnim } from './styled';

import { useTranslation } from 'react-i18next';

import { PrimaryButton, TextButton } from 'components/Button/Button';
import IconButton from 'components/IconButton/IconButton';

const Hero = () => {
  const { t } = useTranslation();
  
  return (
    <BaseHero>
      <HeroContent>
        <HeroTitle>{t('Hero-Title')}</HeroTitle>
        <HeroDescription>{t('Hero-Description')}</HeroDescription>
        <HeroActions>
          <HeroActionGroup>
            <PrimaryButton href='https://exchange.yogi.fi'>{t('Hero-Cta')}</PrimaryButton>
            <TextButton href='https://docs.yogi.fi'>{t('Hero-LearnMore')}</TextButton>
          </HeroActionGroup>
          <HeroActionGroup>
            <IconButton href='https://discord.gg/W6wUZ4tgNC' icon={['fab', 'discord']} />
            <IconButton href='https://github.com/yogi-fi' icon={['fab', 'github']} />
            <IconButton href='https://twitter.com/yogi_finance' icon={['fab', 'twitter']} />
            <IconButton href='https://medium.com/yogi-fi' icon={['fab', 'medium']} />
            <IconButton href='https://t.me/yogi_finance' icon={['fab', 'telegram']} />
          </HeroActionGroup>
        </HeroActions>
      </HeroContent>
      <HeroAnim>
        {/* <HeroLogo src={YogiLogo} alt="Yogi Logo" /> */}
      </HeroAnim>
    </BaseHero>
  )
};

export default Hero;