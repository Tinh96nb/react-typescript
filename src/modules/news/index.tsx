import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import buildRoot from "common/buildRoot";

import { Hello } from "./components/Hello";
import { Byebye } from "./components/Byebye";

const moduleNews = (
  <Router>
      <ul>
        <li>
          <Link to="/news/hello">Hello</Link>
        </li>
        <li>
          <Link to="/news/byebye">Byebye</Link>
        </li>
      </ul>
      <Route path="/news/hello" component={Hello} />
      <Route path="/news/byebye" component={Byebye} />
  </Router>
);

buildRoot(moduleNews, 'NEW_MODULE');
