import React, {Component} from 'react';
import {Modal} from 'react-bootstrap';

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="menu-wrapper">
                <nav>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/find-time">Find Availabile Time</a>
                    </li>
                    <li>
                        <a href="/view-time/id">View Saved Time</a>
                    </li>
                </nav>
            </div>
        );
    }
}