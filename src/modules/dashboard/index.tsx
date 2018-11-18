import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import buildRoot from "common/helpers/buildRoot";

import { MODULE_DASHBOARD } from 'redux/configureStore';
import { dashboardContainer } from './containers'
import Layout from './layout'

const moduleDashboard = (
  <Router>
    <Layout>
      <Route path="/" component={dashboardContainer} />
    </Layout>
  </Router>
);

buildRoot(moduleDashboard, MODULE_DASHBOARD);
