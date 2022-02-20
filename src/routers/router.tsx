import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Admin } from '../pages/Admin';
import { Detail } from '../pages/Detail';
import { Exhibition } from '../pages/Exhibition';
import { Main } from '../pages/Main';

export const Routers = () => {

  return (
    <Router>
      <Switch>
        <Route path="/exhibition/:id">
          <Exhibition />
        </Route>
        <Route path="/detail/:id">
          <Detail />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
};