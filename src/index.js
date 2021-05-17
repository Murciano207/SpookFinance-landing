import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';
import WebFont from 'webfontloader';
import { MediaQuery } from 'constants/MediaQuery';

import Yogi from 'apps/Yogi/Yogi';

import './i18n';
import './icons';

WebFont.load({
  google: {
    families: ['Inter:200,400,600,700', 'sans-serif'],
  },
});

const GlobalStyle = createGlobalStyle`
  * { 
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    text-rendering: optimizeLegibility;
    background: radial-gradient(circle at 0% 0%, #4B0082, #1a2361);
    min-height: 100vh;
  }

  .hide-xs {
    display: none !important;

    ${MediaQuery.sm} {
      display: unset;
    }
  }

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Normalize />
    <GlobalStyle />
    <Yogi />
  </React.StrictMode>,
  document.getElementById('root')
);
