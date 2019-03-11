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

    render() {
    
            
        return (
            <div className="container">
                <h2>Welcome
                    <b>{formatName(user)}</b>
                </h2>
                <button className="button-find" onClick={this.availTimes}>Find Available Time</button>
                <br></br>
                <button className="button-save" onClick={this.savedTimes}>View Saved Times</button>
                {
                    this.state.redirect
                        ? <Redirect to={(this.state.redirectTo)}/>
                        : null
                }

            </div>
        );
    }
}