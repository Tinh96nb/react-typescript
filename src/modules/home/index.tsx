import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import buildRoot from "common/helpers/buildRoot";

import { MODULE_HOME } from 'redux/configureStore';
import { homeContainer } from './containers';
import Layout from './layout';

const moduleAuth = (
  <Router>
    <Layout>
      <Route path="/" component={homeContainer} />
      <Route path="/article/:id" component={homeContainer} />
    </Layout>
  </Router>
);

buildRoot(moduleAuth, MODULE_HOME);
