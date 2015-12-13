'use strict';

import React, {Component} from 'react';
import { Link } from 'react-router';
import AppStore from '../stores/AppStore';
import ActionCreator from '../actions/AppActions';

export default class ProjectModule extends Component {

  constructor (props) {
    super(props);

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

  componentDidMount () {
    AppStore.listen(this._onChange);
  }

  componentWillUnmount () {
    AppStore.unlisten(this._onChange);
  }

   render () {
     return (
      <li className={this.state.slug}>
      	<Link to={this.state.slug}>
      		<div className="content">
      			<div className="copy">
      				<h1>{ this.state.campaign }</h1>
      				<h3>{ this.state.client }</h3>
      			</div>
      			<div className="bg animate"></div>
      		</div>
          <div className="img" style={{ backgroundImage: 'url(' + this.state.thumbnail.image + ')' }}/>
      	</Link>
      </li>
     )
   }
};
