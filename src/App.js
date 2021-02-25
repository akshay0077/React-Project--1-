import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import Home from './compnents/Home'
import About from './compnents/About'
import Service from './compnents/Service'
import Contact from './compnents/Contact'
import Nav from  './compnents/nav/Nav'

import './App.css';

function App() {
  return (
    <>
      <Router>
        <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/service" component={Service} />
            <Route exact path="/contact" component={Contact} />
            <Redirect to="/" />
          </Switch>
      </Router>
    </>
  );
}

export default App;
