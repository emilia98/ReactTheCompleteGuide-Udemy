import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';

import Home from './components/home/Home';
import CreateReactApp from './components/create-react-app/CreateReactApp';
import SimpleComponent from './components/simple-component/SimpleComponent';
import SimpleComponentCode from './components/simple-component/SimpleComponentCode';
import UnderstandingJSXCode from './components/understanding-jsx/UnderstandingJSXCode';
import UnderstandingJSX from './components/understanding-jsx/UnderstandingJSX';
import JSXRestrictions from './components/jsx-restrictions/JSXRestrictions';

class App extends Component {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand-lg navigation">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-item btn btn-primary" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-item btn btn-info" to="/create-react-app">Create React App</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-item btn btn-success" to="/simple-component">Simple Component</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-item btn btn-warning" to="/understanding-jsx">Understanding JSX</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-item btn btn-danger" to="/jsx-restrictions">JSX Restrictions</Link>
                </li>
            </ul>
        </nav>

        <Switch>
          <Route path="/create-react-app">
            <CreateReactApp />
          </Route>
          <Route path="/simple-component/code">
            <SimpleComponentCode />
          </Route>
          <Route path="/simple-component">
            <SimpleComponent />
          </Route>
          <Route path="/understanding-jsx/code">
            <UnderstandingJSXCode />
          </Route>
          <Route path="/understanding-jsx">
            <UnderstandingJSX />
          </Route>
          <Route path="/jsx-restrictions">
            <JSXRestrictions />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
