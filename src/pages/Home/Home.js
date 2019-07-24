import React, {Component} from 'react';
import {Router, Route, Switch, Redirect} from 'react-router';
import './Home.css';
import { ReactComponent as CancelIcon } from './Cancel.svg';
import { ReactComponent as SavedIcon } from './SavedTimes.svg';
import { ReactComponent as SearchIcon } from './Search.svg';
import { Container, Card, Col, Row,  CardImg, CardText, CardBody,
                                      CardTitle, CardSubtitle } from 'reactstrap';

//import { Card, ListItem, Button, Icon } from 'react-native-elements';

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
    
    componentWillMount = () => {
        var user = localStorage.getItem('user');
        if (user && user !== ""){
            this.setState({user: user})
        } else {
            this.setState({user: "beautiful"})
        }
    }
    // each Card contains the card block, and stretched-link is used to make the whole card clickable
    render() {
        return (
           <div class ="welcome-page">
              <div class="welcome-row-content">
                  <div class="welcome-row-title">
                      <h2>
                        Welcome,
                        <b>{" " + this.state.user}</b>
                      </h2>
                      <div className='welcome-message'>What would you like to do today?</div>
                  </div>
                  <div class="column welcome-col">
                      <a href="find-time" class="stretched-link">
                          <Card className="welcome-card" variant="top">
                              <SearchIcon className="icon-picture"/>
                              <CardBody>
                                  <CardText>
                                      Find Available Times
                                  </CardText>
                              </CardBody>
                          </Card>
                      </a>
                 </div>
                 <div class="column welcome-col">
                     <a href="saved" class="stretched-link">
                         <Card className="welcome-card" variant="top">
                             <SavedIcon className="icon-picture"/>
                             <CardBody>
                                 <CardText>
                                     View Saved Times
                                 </CardText>
                             </CardBody>
                         </Card>
                     </a>
                 </div>
                 <div class="column welcome-col">
                     <Card className="welcome-card" variant="top">
                         <CancelIcon className="icon-picture"/>
                         <CardBody>
                             <CardText>
                                 View Cancellations
                             </CardText>
                         </CardBody>
                     </Card>
                 </div>
              </div>
           </div>
        );
    }
}
