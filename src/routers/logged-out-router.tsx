import React from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Login } from '../pages/login';
import { Main } from "../pages/main";
import { SignUp } from '../pages/signup';
import { Service } from '../pages/service';
import { Reference } from '../pages/reference';
import { Sample } from "../pages/sample";
import { Test } from '../pages/test';
import { Profile } from "../pages/profile";
import { Business } from "../pages/business";
import { Login2 } from "../pages/login2";

export const LoggedOutRouter = () => {

  return (
    <Router>
      <Switch>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/login2">
          <Login2 />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/service">
          <Service />
        </Route>
        <Route path="/reference">
          <Reference />
        </Route>
        <Route path="/sample">
          <Sample />
        </Route>
        <Route path="/test">
          <Test />
        </Route>
        <Route path="/business">
          <Business />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
};