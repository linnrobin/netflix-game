import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "../views/LandingPage";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
    </Switch>
  );
}

export default Routes;
