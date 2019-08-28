import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Login from '../components/login/page/container';
import Feeds from '../components/feeds/page/component';
import PrivateRoute from './PrivateRoute'
import Organizations from "../components/organization/page/component";

const AppRouter = () => {
  return (
    <Router>
        {/*<Redirect from='/' to='/feeds' />*/}
        <Route path="/" exact component={Login} />
        <PrivateRoute path="/events" component={Feeds} />
        <PrivateRoute path="/organizations" component={Organizations} />
        <Route path="/users/" component={Login} />
    </Router>
  );
}

export default AppRouter;