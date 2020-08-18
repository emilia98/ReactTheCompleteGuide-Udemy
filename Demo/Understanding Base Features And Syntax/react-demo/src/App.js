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
import ManipulatingState from './components/manipulating-state/ManipulatingState';
import ManipulatingStateCode from './components/manipulating-state/ManipulatingStateCode';
import ReactHooks from './components/react-hooks/ReactHooks';
import ReactHooksCode from './components/react-hooks/ReactHooksCode';
import PassingMethodReferences from './components/passing-method-references/PassingMethodReferences';
import PassingMethodReferencesCode from './components/passing-method-references/PassingMethodReferencesCode';
import TwoWayBinding from './components/two-way-binding/TwoWayBinding';
import TwoWayBindingCode from './components/two-way-binding/TwoWayBindingCode';
import WorkingWithStylesheets from './components/working-with-stylesheets/WorkingWithStylesheets';
import WorkingWithStylesheetsCode from './components/working-with-stylesheets/WorkingWithStylesheetsCode';

class App extends Component {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand-lg navigation">
            <ul className="navbar-nav row-break">
                <li className="nav-item">
                    <Link className="nav-link btn btn-primary" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link btn btn-info" to="/create-react-app">Create React App</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link btn btn-success" to="/simple-component">Simple Component</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link btn btn-warning" to="/understanding-jsx">Understanding JSX</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link btn btn-danger" to="/jsx-restrictions">JSX Restrictions</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link btn btn-primary" to="/functional-component">Functional Component</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link btn btn-info" to="/reusing-component">Reusing Component</Link> 
                </li>
                <li className="nav-item">
                  <Link className="nav-link btn btn-success" to="/dynamic-component">Dynamic Component</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link btn btn-warning" to="/working-with-props">Working With Props</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link btn btn-danger" to="/children-props">Children Props</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link btn btn-primary" to="/understanding-state">Understanding State</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link btn btn-info" to="/handling-events">Handling Events</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link btn btn-success" to="/manipulating-state">Manipulating State</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link btn btn-warning" to="/react-hooks">React Hooks</Link>
                </li>
                <li className="nav-tem">
                  <Link className="nav-link btn btn-danger" to="/passing-method-references">Passing Method References</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link btn btn-primary" to="/two-way-binding">Two Way Binding</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link btn btn-info" to="/working-with-stylesheets">Working With Stylesheets</Link>
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
          <Route path="/react-hooks/code">
            <ReactHooksCode />
          </Route>
          <Route path="/react-hooks">
            <ReactHooks />
          </Route>
          <Route path="/manipulating-state/code">
            <ManipulatingStateCode />
          </Route>
          <Route path="/manipulating-state">
            <ManipulatingState />
          </Route>
          <Route path="/passing-method-references/code">
            <PassingMethodReferencesCode />
          </Route>
          <Route path="/passing-method-references">
            <PassingMethodReferences />
          </Route>
          <Route path="/two-way-binding/code">
            <TwoWayBindingCode />
          </Route>
          <Route path="/two-way-binding">
            <TwoWayBinding />
          </Route>
          <Route path="/working-with-stylesheets/code">
            <WorkingWithStylesheetsCode />
          </Route>
          <Route path="/working-with-stylesheets">
            <WorkingWithStylesheets />
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
