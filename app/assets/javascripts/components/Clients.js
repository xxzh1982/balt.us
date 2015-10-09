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
     const clientsToRender = this.state.clients.map( ( client ) => {
        if ( client.image ){
          return (
            <li>
              <span className="valign"></span>
              <img className="vcontent" src={ client.image } alt="{ client.name }"/>
              <div>{ client.name }</div>
            </li>
          )
        } else {
          return (
            <li className="svg"><div>{ client.name }</div></li>
          )
        }
     });
     return (
       <section id="clients">
        <div className="inner">
          <header>
            <h2>Businesses Ive Helped</h2>
          </header>
          <ul>
          { clientsToRender }
          </ul>
        </div>
       </section>
     )
   }
};
