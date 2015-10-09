'use strict';

import React, { Component }  from 'react';
import { Link } from 'react-router';
import AppStore from '../stores/AppStore';
import ActionCreator from '../actions/AppActions';
import ProjectModule from '../components/ProjectModule';
import cx from 'classnames';
import Awards from '../components/Awards';
import Clients from '../components/Clients';


export default class Home extends Component {
  constructor (props) {
    super(props);

    this.state = AppStore.getState();

    this._onChange = () => {
      this.setState( AppStore.getState() );
    }
  }

  componentWillMount () {
    AppStore.listen(this._onChange);
  }

  componentWillUnmount () {
    AppStore.unlisten(this._onChange);
  }

  render () {

    const projectsToRender = this.state.projects.map( (m) => {
       return (
         <ProjectModule key={m.slug} projectId={m.slug} />
       )
    });
    return (
      <div className='Home'>
        <div className='Home-container'>
          <ul className='projects'>
          { projectsToRender }
          </ul>
          <Awards />
          <Clients />
        </div>
      </div>
    );
  }
};
