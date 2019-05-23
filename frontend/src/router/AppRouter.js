import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import React from "react";
import Header from "../components/Header";
import NotFoundPage from "../components/NotFoundPage";
import PimfyApp from "../components/PimfyApp";
import LoginPage from "../components/Login";
import SignupPage from "../components/Signup";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={PimfyApp} exact={true} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
