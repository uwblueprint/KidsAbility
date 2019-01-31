import React, {Component} from 'react';
//import Menu from '/imports/ui/components/Menu/Menu';

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
	        <header>
	        	<div class="footer-container">
	            	<div class="tagline">Made by <a>UW Blueprint</a></div>
	            	<div class="tagline">Copyright????</div>
	            </div>
	        </header>
        );
    }
}