'use strict';

import React, {Component} from 'react';
import AppStore from '../stores/AppStore';

export default class Hero extends Component {

  constructor (props) {
    super(props);

    this.state = AppStore.getState();

    console.log('this.state', this.state);

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
         <div class="inner">
           <img class="logo" src="" alt="BALT"/>
           <div class="contact">
             <h5>{ this.state.about.email }</h5>
             <h5>{ this.state.about.city }</h5>
           </div>
         </div>
       </section>
     )
   }
};
