'use strict';

import React, {Component} from 'react';
import AppStore from '../stores/AppStore';
import cx from 'classnames';


export default class Hero extends Component {

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
     return (
       <section id="hero">
         <div className="inner">
           <img className="logo" src={ this.state.about.logo } alt="BALT"/>
           <div className="contact">
             <h5>{ this.state.about.email }</h5>
             <h5>{ this.state.about.city }</h5>
           </div>
         </div>
       </section>
     )
   }
};
