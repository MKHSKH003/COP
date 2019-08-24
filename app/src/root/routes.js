import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from '../components/login/components/page/container';
import Feeds from '../components/feeds/components/page/component';
import PrivateRoute from './PrivateRoute'

const AppRouter = () => {
  return (
    <Router>
        <Route path="/login" exact component={Login} />
        <PrivateRoute path="/feeds" component={Feeds} />
        <Route path="/users/" component={Login} />
    </Router>
  );
}

export default AppRouter;