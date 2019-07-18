// This imports the styling into the react app. All styling in this file will be
// available to all components as this is the root page/component
import './App.css';

//Imports This is needed for every component
import React, {Component} from 'react';

//These are all npm packages
import firebase from 'firebase';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {NotificationContainer} from 'react-notifications';
import {NotificationManager} from 'react-notifications';
import createBrowserHistory from 'history/createBrowserHistory';

//These are page components we are importing from our /src/pages folder
import Home from '../src/pages/Home/Home'
import NotFound from '../src/pages/NotFound/NotFound'
import Footer from '../src/components/Footer/Footer'
import Header from '../src/components/Header/Header'
import Login from '../src/components/Users/Login'
import Search from '../src/pages/Search/Search'
import View from '../src/pages/View/View'
import Saved from '../src/pages/Saved/Saved'


//Create an instance of browserHistory
const browserHistory = createBrowserHistory();
const proxy = process.env.NODE_ENV === "production" ? process.env.REACT_APP_SERVER : "http://localhost:4000";

export default class App extends Component {

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
        this.state = {
            user: false
        };
    }

    /**
     * Gets a list of scheduled events for a clinician.
     * e.g.
     *  Request:
     *    GET /api/schedules/CYNTHIA/LENNON
     *  Response:
     *    Json: [ appointment objects ]
     *
     *  Appointment objects:
     *    {
     *      ID: 123
     *      ClientFirst: "firstname"
     *      ClientID: "123456"
     *      ClientLast: "lastname"
     *      Date: "11-Apr-19"
     *      Duration: 1.5
     *      Email: "clennon@kidsability.ca"
     *      Start: "9:00"
     *      End: "10:30"
     *      FirstName: "CYNTHIA"
     *      LastName: "LENNON"
     *      ServiceDescription: "Details"
     *      Treatment: "ABC"
     *      field16: ""
     *      field17: ""
     *      field18: ""
     *      _id: "123456789abcdef"
     *    }
     */
    getScheduleAPI = async (firstName, lastName) => {
        const response = await fetch(proxy+'/api/schedules/'+firstName+"/"+lastName, {
            headers : {
                'Cache-Control': 'no-cache'
            }
        });
        const body = await response.json();
        if (response.status !== 200) {
            throw Error(body.message);
        }
        return body;
    };

    /**
     * Gets a list of clinician names.
     * e.g.
     *  Request:
     *    GET /api/clinicians
     *  Response:
     *    Json: [ Clinician name objects ]
     *
     *  Clinician name objects:
     *    {
     *      _id: {
     *        First: "FirstName",
     *        Last: "LastName"
     *      }
     *    }
     */
    getCliniciansAPI = async () => {
        const response = await fetch(proxy+'/api/clinicians', {
            method: 'GET',
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        const body = await response.json();
        if (response.status !== 200) {
            throw Error(body.message);
        }
        return body;
    };
    
    getSavedAPI = async () => {
        const response = await fetch(proxy+'/api/saved', {
            method: 'GET',
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        const body = await response.json();
        if (response.status !== 200) {
            throw Error(body.message);
        }
        return body;
    }

    postSavedAPI = async (param) => {
        const response = await fetch(proxy+'/api/saved', {
            method: 'POST', 
            body: JSON.stringify({
                Name: param.Name,
                Date: param.Date,
                Start: param.Start,
                End: param.End,
                id: param.id,
                Location: param.Location,
                Note: param.Note
            }),
            headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json',
            },
        })
        const body = await response.json();
        if (response.status !== 201) {
            console.log(response);
            console.log("Error with posting saved-times");
        }
        return body;
    }

    deleteSavedAPI = async (id) => {
        const response = await fetch(proxy + '/api/saved/' + id, {
            method: 'DELETE',
        })
        if (!response.ok) {
            console.log(response)
            console.log("Error with deleting saved-times")
        }
    }

    postSearchAPI = async (databody) => {
        const response = await fetch(proxy+'/api/search/post', {
            method: 'POST', 
            body: JSON.stringify(databody),
            headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json',
             },
        })
        const body = await response.json();
        if (response.status !== 201) {
            console.log(response);
            console.log("Error with posting saved-times");
        }
        return body;
    };
    
    getSearchAPI = async (id) => {
        const response = await fetch(proxy+'/api/search/'+id);
        const body = await response.json();
        if (response.status !== 200) {
            throw Error(body.message);
        }
        return body;
    };
    
    
    postUserAPI = async (databody) => {
        const response = await fetch(proxy+'/api/users/post', {
            method: 'POST', 
            body: JSON.stringify(databody),
            headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json',
             },
        })
        const body = await response.json();
        if (response.status !== 201) {
            console.log(response);
            console.log("Error with posting user");
        }
        return body;
    };
    
    getUsersAPI = async (id) => {
        const response = await fetch(proxy+'/api/users');
        const body = await response.json();
        if (response.status !== 200) {
            throw Error(body.message);
        }
        return body;
    };

    componentWillMount = () => {
        this.handleUserUpdate();
    }

    handleUserUpdate = () => {
        var user = localStorage.getItem('user');
        this.setState({user: user});
    }
    
    render() {
        
        const SearchPage = (props) => {
            return (
                <Search
                    getScheduleAPI={this.getScheduleAPI}
                    hidden={props}
                    getCliniciansAPI={this.getCliniciansAPI}
                    postSearchAPI={this.postSearchAPI}
                    getSearchAPI={this.getSearchAPI} 
                />
            )
        }
        
        const ViewSearch = (props) => {
            return (
                <View
                    postSavedAPI={this.postSavedAPI}
                    hidden={props}
                    getScheduleAPI={this.getScheduleAPI}
                    getSearchAPI={this.getSearchAPI}        
                />
            )
        }
        
        const SavedPage = (props) => {
            return (
                <Saved 
                    getSavedAPI={this.getSavedAPI}
                    deleteSavedAPI={this.deleteSavedAPI}
                />
            )
        }
        const LoginPage = (props) => {
            return (
                <Login
                    handleUserUpdate={this.handleUserUpdate}
                    postUserAPI={this.postUserAPI}
                    getUsersAPI={this.getUsersAPI}
                />
            )
        }

        var db = firebase.firestore();

        // This is where pre-render calculations happen These calculations can also be
        // done in lifecycle methods. The latter is probably better practice

        return (
            <Router history={browserHistory}>
                <div className="App">
                    <Header user={this.state.user} />
                    <NotificationContainer/>
                    { (this.state.user && this.state.user !== "")
                        ?
                    <Switch>

                        <Route exact={true} path="/" component={Home}/>
                        <Route path="/find-time" render={SearchPage}/>
                        <Route path="/edit-time/:searchId" render={SearchPage}/>
                        <Route path="/about" component={NotFound}/>
                        <Route path="/saved" component={SavedPage}/>
                        <Route path="/login" component={LoginPage}/>
                        <Route path="/view-search/:searchId" render={ViewSearch}/>
                        <Route component={NotFound}/>

                    </Switch>
                        :
                    <Switch>
                        
                        <Route path="/login" component={LoginPage}/>
                        <Route component={LoginPage}/>
                        
                    </Switch>
                        
                    }

                    <Footer db={db}></Footer>
                </div>
            </Router>
        );
    }
}
