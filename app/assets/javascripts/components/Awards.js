'use strict';

import React, {Component} from 'react';
import AppStore from '../stores/AppStore';
import ActionCreator from '../actions/AppActions';
import cx from 'classnames';

export default class Awards extends Component {

  constructor (props) {
    super(props);

    this.state = AppStore.getState();

    this._onChange = (o) => {
      this.setState( AppStore.getState() );
    }
  }

  componentDidMount () {
    AppStore.listen(this._onChange);
  }

  componentWillUnmount () {
    AppStore.unlisten(this._onChange);
  }

   render () {
     const awardsToRender = this.state.awards.map( (award) => {
        return (
          <li><div>{ award.name }</div></li>
        )
     });
     return (
       <section id="awards">
       	<div class="inner">
       		<header>
       			<h2>Awards Ive Received</h2>
       		</header>
       		<ul>
       			{ awardsToRender }
       		</ul>
       	</div>
       </section>
     )
   }
};
