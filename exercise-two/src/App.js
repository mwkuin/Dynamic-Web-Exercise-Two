import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
//Styles
import './App.css';

import Header from './components/header';
import Home from './containers/home'

function App() {
  return (
    <div className="SiteWrapper">
      <Header />
        <Router>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
