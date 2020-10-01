import React, { lazy } from "react";
import { Switch, Route } from "react-router-dom";

const Home = lazy(() => import("../Page/Home"));

const AppRoute = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default AppRoute;
