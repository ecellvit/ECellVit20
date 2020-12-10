import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/main";
import Recruitments from "./pages/recruitments";
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/recruitments" component={Recruitments} />
          <Route path="*" component={ErrorPage} />
        </Switch>
      </Router>
  );
}

export default App;