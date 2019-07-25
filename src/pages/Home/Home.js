import React, {Component} from 'react';
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import './Home.css';
import {ReactComponent as CancelIcon} from './Cancel.svg';
import {ReactComponent as SavedIcon} from './SavedTimes.svg';
import {ReactComponent as SearchIcon} from './Search.svg';
import {Card, CardText, CardBody} from 'reactstrap';

export default class Home extends Component {

    constructor(props) {
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
