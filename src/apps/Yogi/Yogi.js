import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Context from 'components/Context/Context';
import Nav from 'components/Nav/Nav';
import Crowdsale from 'components/Crowdsale/Crowdsale';
import Hero from 'components/Hero/Hero';
import Footer from 'components/Footer/Footer';

const Yogi = () => {
  return (
    <Context>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Hero />
          </Route>
          <Route path="/crowdsale">
            <Crowdsale />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </Context>
  );
};

export default Yogi;
