'use strict';

import React, { Component }  from 'react';
import { Link } from 'react-router';
import AppStore from '../stores/AppStore';
import ActionCreator from '../actions/AppActions';

export default class Details extends Component {
  constructor (props) {
    super(props);

    this.projectId = this.props.params.projectId;

    this.getStateByProjectId = () => {
      if ( AppStore.getState().projects.filter(project => project.projectId === this.projectId)[0] ) {
        return AppStore.getState().projects.filter(project => project.projectId === this.projectId)[0];
      } else {
        return {};
      }
    }

    this.state = this.getStateByProjectId();
    this._onChange = () => {
      this.setState( this.getStateByProjectId() );
    }
  }

  componentWillMount () {
    AppStore.listen(this._onChange);
  }

  componentWillUnmount () {
    AppStore.unlisten(this._onChange);
  }

  render () {
    return (
      <div className='Details'>
        <div className='Details-container'>
        </div>
      </div>
    );
  }
};
