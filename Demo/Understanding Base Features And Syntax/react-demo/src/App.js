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
import FunctionalComponent from './components/functional-component/FunctionalComponent';
import FunctionalComponentCode from './components/functional-component/FunctionalComponentCode';
import ReusingComponent from './components/reusing-component/ReusingComponent';
import DynamicComponent from './components/dynamic-component/DynamicComponent';
import WorkingWithProps from './components/working-with-props/WorkingWithProps';
import WorkingWithPropsCode from './components/working-with-props/WorkingWithPropsCode';
import ChildrenProps from './components/children-props/ChildrenProps';
import ChildrenPropsCode from './components/children-props/ChildrenPropsCode';
import UnderstandingState from './components/understanding-state/UnderstandingState';
import UnderstandingStateCode from './components/understanding-state/UnderstandingStateCode';
import HandlingEvents from './components/handling-events/HandlingEvents';
import HandlingEventsCode from './components/handling-events/HandlingEventsCode';

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
                <li className="nav-item">
                  <Link className="nav-item btn btn-primary" to="/functional-component">Functional Component</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-item btn btn-info" to="/reusing-component">Reusing Component</Link> 
                </li>
                <li className="nav-item">
                  <Link className="nav-item btn btn-success" to="/dynamic-component">Dynamic Component</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-item btn btn-warning" to="/working-with-props">Working With Props</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-item btn btn-danger" to="/children-props">Children Props</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-item btn btn-primary" to="/understanding-state">Understanding State</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-item btn btn-info" to="/handling-events">Handling Events</Link>
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
          <Route path="/functional-component/code">
            <FunctionalComponentCode />
          </Route>
          <Route path="/functional-component">
            <FunctionalComponent />
          </Route>
          <Route path="/reusing-component">
            <ReusingComponent />
          </Route>
          <Route path="/dynamic-component">
            <DynamicComponent/>
          </Route>
          <Route path="/working-with-props/code">
            <WorkingWithPropsCode />
          </Route>
          <Route path="/working-with-props">
            <WorkingWithProps />
          </Route>
          <Route path="/children-props/code">
            <ChildrenPropsCode />
          </Route>
          <Route path="/children-props">
            <ChildrenProps />
          </Route>
          <Route path="/understanding-state/code">
            <UnderstandingStateCode />
          </Route>
          <Route path="/understanding-state">
            <UnderstandingState />
          </Route>
          <Route path="/handling-events/code">
            <HandlingEventsCode />
          </Route>
          <Route path="/handling-events">
            <HandlingEvents />
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
