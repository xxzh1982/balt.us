'use strict';
/**
 **    Wecome to React
 **
 ** boot·strap:
 ** /ˈbo͞otˌstrap/
 ** a technique of loading a program into a computer ...
 ** by means of a few initial instructions that enable the introduction of the rest of the program.
 **
 ** Once React loads and bundle.js is loaded into the browser ...
 ** routing is handled client-side by the rules defined below in React.render().
 **
 ** Add a 'page' and its route below in the React.render() method.
 ** Nest routes and add query parameters (e.g., `:module` param in the URI /ui-modules/:module).
 ** Query parameters are passed into the rendered component as `this.props.routeParams`
 **
 ** http://rackt.github.io/react-router
 **/

import React from 'react';
import App from './App';
import { Router, Route, DefaultRoute } from 'react-router';
import { history } from 'react-router/lib/HashHistory';

import Home from './pages/Home';
import Details from './pages/Details';

/**
 ** Samsung-specific `modules` (i.e., React components) included below and rendered in <Router />
 ** All modules / Samsung UI elements served via `/modules/${module-name}`
 ** @TODO: enforce consistent name for module/component/UI element
 **/


React.render((
  <Router history={history}>
    <Route path="/" component={App}>
      <Route name="home" path="/home" component={Home}/>
      <Route name="details" component={Details} path="/:projectid"/>
    </Route>
  </Router>
), document.body);
