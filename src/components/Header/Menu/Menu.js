import React, {Component} from 'react';
import {Modal} from 'react-bootstrap';
import {Navbar, Nav, Navitem} from 'react-bootstrap';

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="/">KidsAbility</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/find-time">Find Available Time</a>
                        </li>
                        <li>
                            <a href="/saved">View Saved Times</a>
                        </li>
                        <li>
                            <a href="about">About</a>
                        </li>
                    </ul>
                </div>

                {/* We still need to add a login button & Modal here */}
            </nav>
        );
    }
}