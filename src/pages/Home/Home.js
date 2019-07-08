import React, {Component} from 'react';
import {Router, Route, Switch, Redirect} from 'react-router';
import './Home.css';
import '../Cancel.svg';
import { View, Text, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

/*
Plan: Use Card to have the image and text stored in it and make it clickable
      Then use the Division for Row and Column to make three Cards for the three options
      And in row above it, have the Hello, NAME text
*/
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
                <Card> Karolina Fabulous </Card>
                <Card> Karolina Fabulous </Card>
                <Card> Karolina Fabulous </Card>
                <Card>
                <Card.Img variant="top" src="https://cdn1.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg" />
                   <Card.Body>
                   <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                   </Card.Text>
                   </Card.Body>
                </Card>
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
