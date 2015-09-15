'use strict';

import alt from '../lib/alt';
import assign from 'object-assign';
import ActionCreator from '../actions/AppActions';
import Storage from '../lib/Storage';

/********************************************************************
 * The store is a data warehouse.                                   *
 * This is the single source of truth re: app state.                *
 * Instance vars defined anywhere in the store become the state.    *
 ********************************************************************
 ********************************************************************
 * Data should NOT be instantiated from inside of the store.        *
 * @TODO: load data asynchronously from a database.                 *
 * http://alt.js.org/guide/async/                                   *
 ********************************************************************/
class AppStore {
  constructor () {
    this.projects = [];

    this.getProjectByProjectId = (id) => {
      return this.projects.filter(project => project.projectId === id)[0]
    }


    this.bindListeners({
      loadProjects: ActionCreator.LOAD_PROJECTS,
      projectsLoaded: ActionCreator.PROJECTS_LOADED
    })

  }

  getProjectByProjectId( data ){
    return this.getProjectByProjectId(data.projectNumber);
  }

  loadProjects (data) {
    Storage.loadProjects();
    if ( !this.interval ){
      this.interval = setInterval(
        () => {
          Storage.loadProjects()
        },
        10000
      );
    }
  }
  projectsLoaded (data) {
    if ( data ) {
    }
  }

}

export default alt.createStore(AppStore, 'AppStore');
