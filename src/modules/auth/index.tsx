import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import buildRoot from "common/helpers/buildRoot";
import { MODULE_AUTH } from 'redux/configureStore';

import { authContainer } from "./contaiers/auth";

const moduleAuth = (
  <Router>
      <Route path="/" component={authContainer} />
  </Router>
);

buildRoot(moduleAuth, MODULE_AUTH);
