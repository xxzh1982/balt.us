"use strict";

import React, { Component }  from "react";
import { Link } from "react-router";
import AppStore from "../stores/AppStore";
import ActionCreator from "../actions/AppActions";
import _ from "lodash";


export default class Details extends Component {
  constructor (props) {
    super(props);

    this.projectId = this.props.params.projectid;

    this.getStateById = ( id ) => {
      if ( AppStore.getState().projects ) {
        if ( AppStore.getState().projects.filter(project => project.slug === id)[0] ) {
          return AppStore.getState().projects.filter(project => project.slug === id)[0];
        } else {
          return {};
        }
      }
    }

    this.state = this.getStateById( this.projectId );

    this._onChange = (o) => {
      this.setState( this.getStateById( this.projectId ) );
    }
  }

  componentWillMount () {
    ActionCreator.loadWebsite();
    AppStore.listen(this._onChange);
  }

  componentWillUnmount () {
    AppStore.unlisten(this._onChange);
  }

  render () {
    return (
      <div className="Details Page">
        <div component="div" key={this.state.slug} className="container">
          <section>
            <h1>{ this.state.campaign }</h1>
            <h3></h3>
            <p>paragraph</p>
            <article>
                <div>
                    <p>this.state.copy</p>
                    <img src=""/>
                </div>
            </article>
            <div className="others">
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
        </div>;
      </div>
    );
  }
};
