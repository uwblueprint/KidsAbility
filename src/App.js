//This imports the styling into the react app 
//All styling in this file should be available to all components as this is the root page
import './App.css';

//Imports

//This is needed for every component
import React, { Component } from 'react';

//These are all npm packages 
import {Router, Route, Switch, Redirect} from 'react-router';
import {NotificationContainer} from 'react-notifications';
import createBrowserHistory from 'history/createBrowserHistory';

//These are page components we are importing from our /src/pages folder
import Home from '../src/pages/Home/Home'
import NotFound from '../src/pages/NotFound/NotFound'

//Create an instance of browserHistory
const browserHistory = createBrowserHistory();

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <Router history={browserHistory}>
                <div>
                    <NotificationContainer/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </Router>
        </header>
      </div>
    );
  }
}
