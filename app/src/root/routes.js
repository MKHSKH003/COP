import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import PrivateRoute from './PrivateRoute'
import Login from '../components/login/page/container';
import Events from '../components/events/page/component';
import Organizations from "../components/organization/page/container";

const AppRouter = () => {
  return (
    <Router>
        {/*<Redirect from='/' to='/feeds' />*/}
        <Route path="/" exact component={Login} />
        <PrivateRoute path="/events" component={Events} />
        <PrivateRoute path="/organizations" component={Organizations} />
        <Route path="/users/" component={Login} />
    </Router>
  );
}

export default AppRouter;