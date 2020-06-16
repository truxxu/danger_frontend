import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.scss';
import Home from './pages/Home';
import Topic from './pages/Topic';
import Discussion from './pages/Discussion';
import Info from './pages/Info';
import Navbar from './organisms/Navbar';
import Footer from './organisms/Footer';

const App = () => {
  return (
    <Router>
      <div className="ui container App__Container">

        <Navbar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/topic/:id">
            <Topic />
          </Route>
          <Route path="/discussion/:id">
            <Discussion />
          </Route>
          <Route path="/faq">
            <Info title="FAQ Page"/>
          </Route>
          <Route path="/about">
            <Info title="About Page"/>
          </Route>
          <Route path="/contact">
            <Info title="Contact Page"/>
          </Route>
        </Switch>

        <Footer />

      </div>
    </Router>
  );
}

export default App;
