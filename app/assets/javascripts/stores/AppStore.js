'use strict';

import alt from '../lib/alt';
import assign from 'object-assign';
import ActionCreator from '../actions/AppActions';
import Storage from '../lib/Storage';

/********************************************************************
 * The store is a data warehouse.                                   *
 * This is the single source of truth re: app state.                *
 * Instance vars defined anywhere in the store become the state.    *
 ********************************************************************/
class AppStore {
  constructor () {
    this.about = {};
    this.projects = [];

    this.bindListeners({
      loadWebsite: ActionCreator.LOAD_WEBSITE,
      websiteLoaded: ActionCreator.WEBSITE_LOADED
    })

  }

  getProjectById( id ){
    console.log ( 'getProjectById', id );
    return this.projects.filter(project => project.projectId === id)[0]
  }

  loadWebsite () {
    Storage.loadWebsite();
  }

  websiteLoaded (data) {
    if ( data ) {
      this.about = data.about;
      console.log('this.about',this.about);
      this.projects = data.projects;
    }
  }

}

export default alt.createStore(AppStore, 'AppStore');
