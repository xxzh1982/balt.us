import jsonp from 'jsonp';
import request from 'superagent';
import ActionCreator from '../actions/AppActions';

export
default {
    loadProjects() {
        request
          .get('/assets/data/projects.json')
          .set('Content-Type', 'application/json')
          .end(function(err, res){
            ActionCreator.projectsLoaded( JSON.parse(res.text) );
          });
        // window.callback = (data) => {
        //   ActionCreator.projectsLoaded(data);
        // }
        // jsonp('feed.js?jsonp=callback', (error, data) => {
        //     if (error) {
        //         console.log(`error: $ {
        //             error.message
        //         }`)
        //         return error;
        //     } else {
        //         /* @TODO: figure out why jsonp must use the callback defined above */
        //         ActionCreator.projectsLoaded(data);
        //     }
        // });
    }
};
