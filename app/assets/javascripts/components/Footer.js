'use strict';

import React, {Component} from 'react';
import AppStore from '../stores/AppStore';
import cx from 'classnames';
import { Link } from 'react-router';

export default class Footer extends Component {

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
		 return (
			 <footer id="footer">
				 <div className="inner">
					 <ul className="share">
						<li>
							<a href="http://facebook.com">
								<span className="circle"></span>
								<img className="icon" alt="Facebook" src="assets/images/icons/facebook.svg"/>
							</a>
						</li>
						<li className="divide"></li>
						<li>
							<a href="http://linkedin.com">
								<span className="circle"></span>
								<img className="icon" alt="LinkedIn" src="assets/images/icons/linkedin.svg"/>
							</a>
						</li>
						<li className="divide"></li>
						<li>
							<a href="http://twitter.com">
								<span className="circle"></span>
								<img className="icon" alt="Twitter" src="assets/images/icons/twitter.svg"/>
							</a>
						</li>
						<li className="divide"></li>
						<li>
							<a href="http://pinterest.com">
								<span className="circle"></span>
								<img className="icon" alt="Pinterest" src="assets/images/icons/pinterest.svg"/>
							</a>
						</li>
					 </ul>
					 <div className="bottom">
						 <div className="contact">
							 <h5>{ this.state.about.email }</h5>
							 <h5>{ this.state.about.city }</h5>
						 </div>
						 <Link to="/">
							 <img className="logo" src={ this.state.about.logo } alt="BALT"/>
						 </Link>
					 </div>
				 </div>
			 </footer>
		 )
	 }
};
