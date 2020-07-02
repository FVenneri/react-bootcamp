import React from "react";
import {Route} from "react-router-dom";
import AppPage from "./AppPage";
import Home from "./Home";
import Register from "./Register";
import Profile from "./Profile";

export function Routes() {
  return (
    <>
      <Route exact path="/app/profile" component={Profile}/>
      <Route exact path="/app/register" component={Register}/>
      <Route exact path="/app" component={AppPage}/>
      <Route exact path="/" component={Home}/>
    </>
  );
}