"use strict";

import React, { Component }  from "react";
import { Link } from "react-router";
import AppStore from "../stores/AppStore";
import ActionCreator from "../actions/AppActions";
import _ from "lodash";

export default class OtherProject extends Component {
  constructor (props) {
    super(props);
    console.log ( "props", props );
    // this.getStateById = ( id ) => {
    //   if ( AppStore.getState().projects ) {
    //     if ( AppStore.getState().projects.filter(project => project.slug === id)[0] ) {
    //       return AppStore.getState().projects.filter(project => project.slug === id)[0];
    //     } else {
    //       return {};
    //     }
    //   }
    // }
    // this.state = this.getStateById( this.projectId );
    this._onChange = (o) => {
      this.setState( this.getStateById( this.projectId ) );
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
      <div>
          <img src="" alt=""/>
          <h4></h4>
      </div>
    );
  }
};
