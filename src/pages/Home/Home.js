import React, {Component} from 'react';
import {Router, Route, Switch, Redirect} from 'react-router';
import './Home.css';
const axios = require('axios');

const user = {
    firstName: 'Rebecca',
    lastName: 'Tucker'
};

function formatName(user) {
    return user.firstName + ' ' + user.lastName
}

export default class Home extends Component {

    //This is a constructor
    constructor(props) {

        // This is allowing us to use any props that might have been passed from our
        // parent
        super(props);

        // We set 3 states in this contructor (you can set more later) There is an empty
        // string, a boolean and a string (default message) You can set objects, arrays
        // and numbers
        // NOTE: Arrays are Objects but not vice versa An array is basically an ordered
        // object that has significantly less functionality. However, does the advantage
        // of having the .length method

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
    

    // componentWillMount() {} componentDidMount() {} componentWillReceiveProps() {}
    // componentDidUpdate() {} componentWillUnmount() {} componentWillUpdate() {}
    // shouldComponentUpdate() {} getSnapshotBeforeUpdate() {} Previously known as
    // ComponentWillUpdate()
    
    componentDidMount(){
        console.log("We are on the home page");
        //This causes errors
        {/*}
        this.props.callAPI()
            .then(res => this.setState({response: res.express}))
            .catch(err => console.log(err))
            */}
    }
    
    componentWillMount = () => {
        var user = localStorage.getItem('user');
        if (user && user != ""){
            this.setState({user: user})
        }
        else {
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
                        <img src="https://img.icons8.com/material-outlined/100/000000/edit-property.png"/>
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