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
import Login from '../src/components/Users/Login'
import Search from '../src/pages/Search/Search'
import View from '../src/pages/View/View'
import Saved from '../src/pages/Saved/Saved'


//Create an instance of browserHistory
const browserHistory = createBrowserHistory();
const proxy = process.env.NODE_ENV == "production" ? process.env.REACT_APP_SERVER : "http://localhost:4000";

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
        this.state = {
            user: false
        };
    }

    // This is where handler functions and lifecycle methods/functions are declared
    // You can pass handler functions as props to another components Those
    // components can call the handler functions which could, for example, update
    // the states in this component
    componentDidMount() {
        //this.callAPI()
            //.then(res => this.setState({response: res.express}))
        //    .catch(err => console.log("Error: " + err))
    }
    
    getScheduleAPI = async (firstName, lastName) => {
        const response = await fetch(proxy+'/api/schedules/'+firstName+"/"+lastName);
        const body = await response.json();
        if (response.status !== 200) {
            throw Error(body.message);
        }
        return body;
    };
        
    getCliniciansAPI = async () => {
        const response = await fetch(proxy+'/api/clinicians', {
            method: 'GET',
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        console.log(response);
        //const body = await response.text();
        //console.log(body);
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
        console.log(response);
        //const body = await response.text();
        //console.log(body);
        const body = await response.json();
        if (response.status !== 200) {
            throw Error(body.message);
        }
        return body;
    }
    
    postSavedAPI = async (param) => {
        const response = await fetch(proxy+'/api/saved', {
            method: 'POST', 
            body: JSON.stringify({Name: param.Name, Date: param.Date, Start: param.Start, End: param.End, id: param.id, Location: param.Location, Note: param.Note}),
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
        
        console.log(body);
        return body;
    }
    
    postSearchAPI = async (databody) => {
        console.log(databody);

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
        
        console.log(body);
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
        console.log(databody);

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
        
        console.log(body);
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
        console.log(user);
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

        console.log(this.state.user);
        return (
            <div className="App">
                <header className="App-header">
                    <Router history={browserHistory}>
                        <div>
                            <Header/>
                            <NotificationContainer/>
                            { (this.state.user && this.state.user != "") 
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
                </header>
            </div>
        );
    }
}
