import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import modules from "../modules/";
import NotFound from "./NotFound/";

const Routes = () => {
  return (
    <Router>
      <Switch>
        {modules.map((module) => (
          <Route
            {...module.routeProps}
            key={module.name}
            exact={module.routeProps.exact}
          />
        ))}
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
