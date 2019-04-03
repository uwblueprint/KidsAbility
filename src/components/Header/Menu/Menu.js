import React, {Component} from 'react';
import {Modal} from 'react-bootstrap';
import {NavDropdown, Navbar, Nav, NavItem, Collapse} from 'react-bootstrap';

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>                        
                            </button>
                            <a class="navbar-brand" href="/"><font color="5F5FC4">RocketCare</font></a>
                    </div>
                    <div class="collapse navbar-collapse" id="myNavbar">
                        <ul class="nav navbar-nav mr-auto">
                            <li><a href="/find-time">Find Available Times</a></li>
                            <li><a href="/saved">View Saved Times</a></li>
                            <li><a href="/log-out">Logout</a></li>
                            <li><a href="/help">Help</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
