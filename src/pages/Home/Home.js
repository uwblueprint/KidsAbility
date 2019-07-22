import React, {Component} from 'react';
import {Router, Route, Switch, Redirect} from 'react-router';
import './Home.css';

export default class Home extends Component {

    //This is a constructor
    constructor(props) {
        // This is allowing us to use any props that might have been passed from our
        // parent
        super(props);

        this.state = {
            redirect: false,
            redirectTo: "/"
        };

    }

    availTimes = () => {
        this.setState({redirect: true, redirectTo: "find-time"});
    }

    savedTimes = () => {
        this.setState({redirect: true, redirectTo: "saved"});
    }
    
    componentWillMount = () => {
        var user = localStorage.getItem('user');
        if (user && user !== ""){
            this.setState({user: user})
        } else {
            this.setState({user: ""})
        }
    }

    render() {
        return (
            <div className="container">
                <h2>Welcome
                    <b>{" " + this.state.user}</b>
                </h2>
                <div className="buttons-homepage">
                    <button className="button-find" onClick={this.availTimes}>
                        <img src="https://img.icons8.com/ios/100/000000/overtime.png"/>
                        <h> Find Available Times </h>
                    </button>
                    <button className="button-save" onClick={this.savedTimes}>
                        <img src="https://img.icons8.com/ios/100/000000/planner.png"/>
                        <h> View Saved Times</h>
                    </button>
                </div>
                {
                    this.state.redirect
                        ? <Redirect to={(this.state.redirectTo)}/>
                        : null
                }
            </div>
        );
    }
}
