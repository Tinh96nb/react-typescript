import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import buildRoot from "common/buildRoot";

import { MODULE_HOME } from 'redux/configureStore';
import { homeContainer } from "./containers/home";
import TodoPage from './components/todoPage'
import Layout from './layout'

const moduleAuth = (
  <Router>
    <Layout>
      <ul>
        <li>
          <Link to="/todo">Byebye</Link>
        </li>
      </ul>
      <Route path="/" component={homeContainer} />
      <Route path="/todo" component={TodoPage} />
    </Layout>
  </Router>
);

buildRoot(moduleAuth, MODULE_HOME);
