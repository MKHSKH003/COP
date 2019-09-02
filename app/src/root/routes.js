import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import PageWrapper from '../shared/components/page-wrapper/page/component'

const AppRouter = () => {
  return (
    <Router>
      <Route path="/" component={PageWrapper} />
    </Router>
  );
}

export default AppRouter;