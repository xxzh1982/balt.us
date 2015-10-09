'use strict';

import React, { Component }  from 'react';
import { Link } from 'react-router';
import AppStore from '../stores/AppStore';
import ActionCreator from '../actions/AppActions';

export default class Details extends Component {
  constructor (props) {
    super(props);

    this.projectId = this.props.params.projectId;

    this.getStateById = ( id ) => {
      if ( AppStore.getState().projects.filter(project => project.slug === id)[0] ) {
        return AppStore.getState().projects.filter(project => project.slug === id)[0];
      } else {
        return {};
      }
    }

    this.state = this.getStateById( props.projectId );

    this._onChange = (o) => {
      this.setState( this.getStateById( props.projectId ) );
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
          <section>
            <h1>{ this.state.campaign }</h1>
            <h3></h3>
            <p ng-repeat="paragraph in description">paragraph</p>
            <article>
                <div ng-repeat="block in blocks" du-parallax y="background">
                    <p ng-if="block.copy">this.state.copy</p>
                    <img src="block.image" ng-if="block.image || block.award"/>
                </div>
            </article>
            <div class="others">
                <div>
                    <img src="" alt=""/>
                    <h4>Publishing Site</h4>
                    <p>Conde Nast</p>
                </div>
                <div>
                    <img src="" alt=""/>
                    <h4>Our Book of Liquid Gold</h4>
                    <p>Kraft</p>
                </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
};
