"use strict";

import React, { Component }  from "react";
import { Link } from "react-router";
import AppStore from "../stores/AppStore";
import ActionCreator from "../actions/AppActions";
import _ from "lodash";
import OtherProject from "../components/OtherProject";


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

    this.getId = () => {
      if ( AppStore.getState().projects ){
        // console.log( 'projectId', AppStore.getState().projects, AppStore.getState().projects.filter(project => project.slug !== this.projectId )[0] );
        // if ( AppStore.getState().projects.filter(project => project.slug === this.projectId )[0] ) {
        //   console.log ( "hello " );
        //   // return this.getId();
        // } else {
        //   let id = AppStore.getState().projects.filter(project => project.slug !== this.projectId )[0].slug;
        //   console.log ( 'id ', id );
        //   return id;
        // }
      }
    }

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
    let mediaArray;
    let markup;
    let side;
    if ( this.state.blocks ){
      mediaArray = this.state.blocks.map( (media, index) => {
        side = index % 2 == 0 ? "even" : "odd"
        console.log ( 'media' , media, index, side );
        if ( media.copy ){
          markup = 
            <article className={`copy ${ side }`}>
                <div className="inner">
                    <p>{ media.copy }</p>
                </div>
            </article>
        } else if ( media.image ) {
          if ( media.image.type == "large" ){
            markup = 
              <article className={`image ${ side } ${ media.image.type }`}>
                  <div className="inner">
                      <div className="img" style={{ backgroundImage: 'url(' + media.image.src + ')' }}/>
                  </div>
              </article>
          } else {
            markup = 
              <article className={`image ${ side } ${ media.image.type }`}>
                  <div className="inner">
                      <img src={ media.image.src }/>
                  </div>
              </article>
          }
        } else if ( media.video ) {
          markup = 
            <article className={`video ${ side }`}>
                <div className="inner">
                    <video  controls>
                      <source src={ media.video.mp4 } type="video/mp4"/>
                      <p>Your browser does not support the video tag.</p>
                    </video>
                </div>
            </article>
        }
        return markup;
      })
    };


    return (
      <div className="Details Page">
        <div key={ this.state.slug } className="container">
          <section>
            <div className="copy">
              <h2>{ this.state.campaign }</h2>
              <h3>{ this.state.description }</h3>
            </div>
            <div className="blocks">
            { mediaArray }
            </div>
            <div className="others">
                <OtherProject slug={ this.getId() } />
                <OtherProject slug={ this.getId() } />
            </div>
          </section>
        </div>;
      </div>
    );
  }
};
