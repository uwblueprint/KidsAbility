// This imports the styling into the react app. All styling in this file will be
// available to all components as this is the root page/component
import './App.css';

//Imports This is needed for every component
import React, {Component} from 'react';

//These are all npm packages
import firebase from 'firebase';
import {Router, Route, Switch, Redirect} from 'react-router';
import {NotificationContainer} from 'react-notifications';
import {NotificationManager} from 'react-notifications';
import createBrowserHistory from 'history/createBrowserHistory';

//These are page components we are importing from our /src/pages folder
import Home from '../src/pages/Home/Home'
import NotFound from '../src/pages/NotFound/NotFound'
import Footer from '../src/components/Footer/Footer'
import Header from '../src/components/Header/Header'

import * as settings from '../src/constants/settings.json';
import Search from '../src/pages/Search/Search'
import View from '../src/pages/View/View'
import Saved from '../src/pages/Saved/Saved'



//Create an instance of browserHistory
const browserHistory = createBrowserHistory();
const fire = settings.firebase;
console.log(fire);

export default class App extends Component {

    // This is an empty contructor - please see the other classes for a used
    // constructor
    constructor(props) {
        super(props);

        firebase.initializeApp({
            apiKey: "AIzaSyArvjqKlClk35Xsr-TsUXVtpX-ZysOGqVk",
            authDomain: "kidsability-871ac.firebaseapp.com",
            databaseURL: "https://kidsability-871ac.firebaseio.com",
            projectId: "kidsability-871ac",
            storageBucket: "kidsability-871ac.appspot.com",
            messagingSenderId: "754093479554"
        });

        // This is where we declare the states for THIS component. The states can be
        // passed as props to components called within render
        this.state = {};
    }

    // This is where handler functions and lifecycle methods/functions are declared
    // You can pass handler functions as props to another components Those
    // components can call the handler functions which could, for example, update
    // the states in this component
    componentDidMount() {
        this.callAPI()
            .then(res => this.setState({response: res.express}))
            .catch(err => console.log("Error: " + err))
    }

    callAPI = async (firstName, lastName) => {
        console.log(firstName + lastName);
        let response;
        let body;
        if (firstName && lastName){
            response = await fetch('/api/schedules/'+firstName+"/"+lastName);
            body = await response.json();
        }
        else {
            response = await fetch('/api/schedules');
            body = await response.json();
        }
        console.log(response);
        console.log(body);

        
        if (response.status !== 200) {
            throw Error(body.message);
            console.log(body);
        }
        
        const res = await fetch('/api/schedules/allClinicians');
        console.log(res);
        const b = await res.json();
        console.log(b);
        
        if (res.status !== 200) {
            throw Error(b.message);
            console.log(b);
        }
        
        return body;
    };

    render() {
        
        const SearchPage = (props) => {
            return (
                <Search
                    callAPI={this.callAPI}
                />
            )
        }
        
        var db = firebase.firestore();

        // This is where pre-render calculations happen These calculations can also be
        // done in lifecycle methods. The latter is probably better practice

        return (
            <div className="App">
                <header className="App-header">

                    {/*
                        We need the curly braces to write in-line comments inside
                        return.

                        We are calling the component "Router" below -
                        which is imported from an npm package. We are passing the
                        router a prop c)alled "history". The router has an opening
                        and closing tag.

                        The "<Header/>" component ends in a "/>"
                        instead of a ">" so it doesn't need a closing tag
                    */
                    }
                    <Router history={browserHistory}>
                        <div>
                            <Header/>
                            <NotificationContainer/>
                            <Switch>

                                <Route exact={true} path="/" component={Home}/>
                                <Route path="/find-time" render={SearchPage}/>
                                <Route path="/about" component={NotFound}/>
                                <Route path="/saved" component={Saved}/>
                                <Route path="/view-search" component={View}/>
                                <Route path="latest" components={{Search: Search}} />
                                <Route component={NotFound}/>

                            </Switch>

                            <Footer db={db}></Footer>
                        </div>
                    </Router>
                </header>
            </div>
        );
    }
}
