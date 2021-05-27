import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Context from 'components/Context/Context';
import Nav from 'components/Nav/Nav';
import Hero from 'components/Hero/Hero';
import Footer from 'components/Footer/Footer';
import CrowdsaleBSC from 'components/Crowdsale/CrowdsaleBSC';
import CrowdsalePolygon from 'components/Crowdsale/CrowdsalePolygon';

const Yogi = () => {
  return (
    <Context>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Hero />
          </Route>
          <Route path="/buy/bsc">
            <CrowdsaleBSC />
          </Route>
          <Route path="/buy/polygon">
            <CrowdsalePolygon />
          </Route>
          <Route path="/buy">
            <Redirect from='/buy' to="/buy/bsc" />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </Context>
  );
};

export default Yogi;
