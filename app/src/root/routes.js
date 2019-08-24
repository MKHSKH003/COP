import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from '../components/login/components/page/container';
import Feeds from '../components/feeds/components/page/component';

const AppRouter = () => {
  return (
    <Router>
        <Route path="/" exact component={Login} />
        <Route path="/feeds/" component={Feeds} />
        <Route path="/users/" component={Login} />
    </Router>
  );
}

export default AppRouter;