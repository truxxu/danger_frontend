import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './pages/Home';
import Topic from './pages/Topic';
import Discussion from './pages/Discussion';
import Navbar from './organisms/Navbar';

const App = () => {
  return (
    <Router>
      <div className="ui container">

        <Navbar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/topic">
            <Topic />
          </Route>
          <Route path="/discussion">
            <Discussion />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
