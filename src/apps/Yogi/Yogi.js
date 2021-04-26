import React from 'react';

import Context from 'components/Context/Context';
import Nav from 'components/Nav/Nav';
import Hero from 'components/Hero/Hero';
import Footer from 'components/Footer/Footer';

const Yogi = () => {
  return (
    <Context>
      <Nav />
      <Hero />
      <Footer />
    </Context>
  );
};

export default Yogi;
