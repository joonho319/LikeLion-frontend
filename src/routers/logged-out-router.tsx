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
import { Main2 } from "../pages/main2";
import { Step } from "../pages/step";
import { Online } from "../pages/online";
import { Offline } from "../pages/offline";
import { Community } from "../pages/community";
import { Main3 } from "../pages/main3";
import { Admin } from "../pages/admin";
import { Introduction } from "../pages/introduction";
import { Review } from "../pages/review";
import { Curriculum } from "../pages/curriculum";
import { Apply } from "../pages/apply";
import { Mall } from "../pages/mall";
import { Program } from "../pages/program";
import { SignUp2 } from "../pages/signup2";
import { Agreement } from "../pages/agreement";
import { Terms } from "../pages/terms";
import { Privacy } from "../pages/privacy";
import { Refund } from "../pages/refund";

export const LoggedOutRouter = () => {

  return (
    <Router>
      <Switch>
        <Route path="/agreement">
          <Agreement />
        </Route>
        <Route path="/docs/terms">
          <Terms />
        </Route>
        <Route path="/docs/privacy">
          <Privacy />
        </Route>
        <Route path="/docs/refund">
          <Refund />
        </Route>
        <Route path="/signup">
          <SignUp2 />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/step">
          <Step />
        </Route>
        <Route path="/introduction">
          <Introduction />
        </Route>
        <Route path="/curriculum">
          <Curriculum />
        </Route>
        <Route path="/program/apply">
          <Apply />
        </Route>
        <Route path="/program">
          <Program />
        </Route>
        <Route path="/review">
          <Review />
        </Route>
        <Route path="/offline">
          <Offline />
        </Route>
        <Route path="/login">
          <Login2 />
        </Route>
        {/* <Route path="/login">
          <Login />
        </Route> */}
        <Route path="/reference">
          <Reference />
        </Route>
        {/* 추천서 */}
        <Route path="/sample">
          <Sample />
        </Route>
        <Route path="/service">
          <Service />
        </Route>
        <Route path="/business">
          <Business />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/main3">
          <Main3 />
        </Route>
        <Route path="/">
          <Main2 />
        </Route>
      </Switch>
    </Router>
  );
};