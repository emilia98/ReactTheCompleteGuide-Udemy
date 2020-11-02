import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';


import Home from './components/home/Home';
import InlineConditionalRenderingCode from './components/inline-conditional-rendering/InlineConditionalRenderingCode';
import InlineConditionalRendering from './components/inline-conditional-rendering/InlineConditionalRendering';
import ConditionalRenderingCode from './components/conditional-rendering/ConditionalRenderingCode';
import ConditionalRendering from './components/conditional-rendering/ConditionalRendering';
import OutputtingListsCode from './components/outputting-lists/OutputtingListsCode';
import OutputtingLists from './components/outputting-lists/OutputtingLists';
import ListsMutatingStateCode from './components/lists-mutating-state/ListsMutatingStateCode';
import ListsMutatingState from './components/lists-mutating-state/ListsMutatingState';
import ListsImmutableStateCode from './components/lists-immutable-state/ListsImmutableStateCode';
import ListsImmutableState from './components/lists-immutable-state/ListsImmutableState';
import ListsKeysCode from './components/lists-keys/ListsKeysCode';
import ListsKeys from './components/lists-keys/ListsKeys';
import FlexibleListsCode from './components/flexible-lists/FlexibleListsCode';
import FlexibleLists from './components/flexible-lists/FlexibleLists';

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
                  <Link className="nav-link btn btn-success" to="/inline-conditional-rendering">Inline Conditional Rendering</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link btn btn-warning" to="/conditional-rendering">Conditional Rendering</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link btn btn-info" to="/outputting-lists">Outputting Lists</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link btn btn-danger" to="/lists-mutating-state">Lists Mutating State</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link btn btn-light" to="/lists-immutable-state">Lists Immutable State</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link btn btn-dark" to="/lists-keys">Lists &amp; Keys</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link btn btn-primary" to="/flexible-lists">Flexible Lists</Link>
                </li>
            </ul>
        </nav>

        <Switch>
          <Route path="/inline-conditional-rendering/code">
            <InlineConditionalRenderingCode />
          </Route>
          <Route path="/inline-conditional-rendering">
            <InlineConditionalRendering />
          </Route>
          <Route path="/conditional-rendering/code">
            <ConditionalRenderingCode />
          </Route>
          <Route path="/conditional-rendering">
            <ConditionalRendering />
          </Route>
          <Route path="/outputting-lists/code">
            <OutputtingListsCode />
          </Route>
          <Route path="/outputting-lists">
            <OutputtingLists />
          </Route>
          <Route path="/lists-mutating-state/code">
            <ListsMutatingStateCode />
          </Route>
          <Route path="/lists-mutating-state">
            <ListsMutatingState />
          </Route>
          <Route path="/lists-immutable-state/code">
            <ListsImmutableStateCode />
          </Route>
          <Route path="/lists-immutable-state">
            <ListsImmutableState />
          </Route>
          <Route path="/lists-keys/code">
            <ListsKeysCode />
          </Route>
          <Route path="/lists-keys">
            <ListsKeys />
          </Route>
          <Route path="/flexible-lists/code">
            <FlexibleListsCode />
          </Route>
          <Route path="/flexible-lists">
            <FlexibleLists />
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
