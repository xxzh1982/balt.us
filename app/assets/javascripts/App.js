'use strict';

import React from 'react'
import { Router } from 'react-router'
import ActionCreator from './actions/AppActions';
import AppStore from './stores/AppStore';

import Hero from './components/Hero'
import Home from './pages/Home'

const App = React.createClass({

  mixins: [Router.State],

  render () {
    ActionCreator.loadWebsite();
    return (
      <div className='BodyContent'>
        <Hero />
        <div className='BodyContent-main'>
          {
            this.props.children
              ||
            <Home />
          }
        </div>
      </div>
    );
  }
});

export default App;
