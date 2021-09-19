import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { ScoopMain } from "../pages/scoopmain";
import { ScoopIntro } from "../pages/ScoopIntro";
import { ScoopNewsLetter } from '../pages/ScoopNewsLetter';
import { ScoopWebtoonRecommend } from '../pages/ScoopWebtoonRecommend';

export const LoggedOutRouter = () => {

  return (
    <Router>
      <Switch>
        <Route path="/scoopmain">
          <ScoopMain />
        </Route>
        <Route path="/recommend">
          <ScoopWebtoonRecommend />
        </Route>
        <Route path="/intro">
          <ScoopIntro />
        </Route>
        <Route path="/newsletter">
          <ScoopNewsLetter />
        </Route>
        <Route path="/">
          <ScoopMain />
        </Route>
      </Switch>
    </Router>
  );
};