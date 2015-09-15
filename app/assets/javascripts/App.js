'use strict';

import React from 'react'
import { Router } from 'react-router'

import Dashboard from './pages/Dashboard'

const App = React.createClass({

  mixins: [Router.State],

  render () {

    return (
      <div className='BodyContent'>
        <div className='BodyContent-main'>
          {
            this.props.children
              ||
            <Dashboard />
          }
        </div>
      </div>
    );
  }
});

export default App;
