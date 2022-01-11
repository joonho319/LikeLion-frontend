import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { ScoopMain } from "../pages/scoopmain";
// import { Header } from "../components/header";
import { ScoopIntro } from "../pages/ScoopIntro";
import { ScoopNewsLetter } from '../pages/ScoopNewsLetter';
import { ScoopWebtoonRecommend } from '../pages/ScoopWebtoonRecommend';
import { ScoopTodayWebtoonRecommend } from '../pages/ScoopTodayWebtoonRecommend';
import { ScoopProfile } from '../pages/ScoopProfile';
import { ScoopEditorWebtoon } from '../pages/ScoopEditorWebtoon';
import { ScoopScooperWebtoon } from '../pages/ScoopScooperWebtoon';
import { ScoopLogin } from '../pages/ScoopLogin';
import { ScoopSignUp } from '../pages/ScoopSignUp';
import { ScoopEditorWebtoonDetail } from '../pages/ScoopEditorWebtoonDetail';
import { ScoopAdmin } from '../pages/ScoopAdmin';

export const LoggedOutRouter = () => {

  return (
    <Router>
      <Switch>
        <Route path="/admin">
          <ScoopAdmin />
        </Route>
        <Route path="/editorRecommend/:id">
          <ScoopEditorWebtoonDetail />
        </Route>
        <Route path="/scoopmain">
          <ScoopMain />
        </Route>
        <Route path="/recommend">
          <ScoopWebtoonRecommend />
        </Route>
        <Route path="/editorRecommend">
          <ScoopEditorWebtoon />
        </Route>
        <Route path="/scooperWebtoon">
          <ScoopScooperWebtoon />
        </Route>
        <Route path="/login">
          <ScoopLogin />
        </Route>
        <Route path="/signup">
          <ScoopSignUp />
        </Route>
        <Route path="/todayswebtoon">
          <ScoopTodayWebtoonRecommend />
        </Route>
        <Route path="/profile">
          <ScoopProfile />
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