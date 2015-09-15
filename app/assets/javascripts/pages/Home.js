'use strict';

import React, { Component }  from 'react';
import { Link } from 'react-router';
import AppStore from '../stores/AppStore';
import ActionCreator from '../actions/AppActions';
import ProjectModule from '../components/ProjectModule';


export default class Home extends Component {
  constructor (props) {
    super(props);

    this.state = AppStore.getState();

    this._onChange = () => {
      this.setState( AppStore.getState() );
    }
  }

  componentWillMount () {
    ActionCreator.loadProjects();
    ActionCreator.loadAirports();
    AppStore.listen(this._onChange);
  }

  componentWillUnmount () {
    AppStore.unlisten(this._onChange);
  }

  render () {

    const projectsToRender = this.state.projects.map( (m) => {
       return (
         <ProjectModule key={m.projectId} projectId={m.projectId} />
       )
    });
    return (
      <div className='Home'>
        <h1>Etihad</h1>
        <div className='Home-container'>
          <div className='Home-input'></div>
          <div className='Home-projects'>
          </div>
        </div>
      </div>
    );
  }
};
