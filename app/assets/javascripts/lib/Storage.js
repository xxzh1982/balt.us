import jsonp from 'jsonp';
import request from 'superagent';
import ActionCreator from '../actions/AppActions';

export
default {
    loadWebsite() {
        request
          .get('/assets/data/balt.json')
          .set('Content-Type', 'application/json')
          .end(function(err, res){
            ActionCreator.websiteLoaded( JSON.parse(res.text) );
          });
        // window.callback = (data) => {
        //   ActionCreator.websiteLoaded(data);
        // }
        // jsonp('feed.js?jsonp=callback', (error, data) => {
        //     if (error) {
        //         console.log(`error: $ {
        //             error.message
        //         }`)
        //         return error;
        //     } else {
        //         /* @TODO: figure out why jsonp must use the callback defined above */
        //         ActionCreator.websiteLoaded(data);
        //     }
        // });
    }
};
