import jsonp from 'jsonp';
import request from 'superagent';
import ActionCreator from '../actions/AppActions';

let loaded = false;
export
default {
    loadWebsite() {
      if ( !loaded ){
        loaded = true;
        request
          .get('/assets/data/balt.json')
          .set('Content-Type', 'application/json')
          .end(function(err, res){
            ActionCreator.websiteLoaded( JSON.parse(res.text) );
          });
      }
    }
};
