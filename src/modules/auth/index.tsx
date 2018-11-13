import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import buildRoot from "common/buildRoot";

import { Hello } from "./components/Hello";
import { Byebye } from "./components/Byebye";

const moduleAuth = (
  <Router>
      <ul>
        <li>
          <Link to="/auth/hello">Hello</Link>
        </li>
        <li>
          <Link to="/auth/byebye">Byebye</Link>
        </li>
      </ul>
      <Route path="/auth/hello" component={Hello} />
      <Route path="/auth/byebye" component={Byebye} />
  </Router>
);

buildRoot(moduleAuth, 'AUTH_MODULE');
