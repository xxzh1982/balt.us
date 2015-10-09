'use strict';

import React, {Component} from 'react';
import PageStore from '../stores/PageStore';
import ActionCreator from '../actions/PageActions';

export default class Awards extends Component {

  constructor (props) {
    super(props);

    this.getStateByProjectId = () => {
      if ( PageStore.getState().projects.filter(project => project.projectId === props.projectId)[0] ) {
        return PageStore.getState().projects.filter(project => project.projectId === props.projectId)[0];
      } else {
        return {};
      }
    }

    this.state = PageStore.getStateByProjectId( props.projectId );

    this._onChange = (o) => {
      this.setState( this.getStateByProjectId() );
    }
  }

  componentDidMount () {
    ActionCreator.loadWebsite();
    PageStore.listen(this._onChange);
  }

  componentWillUnmount () {
    PageStore.unlisten(this._onChange);
  }

   render () {
     return (
       <section id="awards">
       	<div class="inner">
       		<header>
       			<h2>Awards I've Received</h2>
       		</header>
       		<ul>
       			<li><div>{ name }</div></li>
       		</ul>
       	</div>
       </section>
     )
   }
};
