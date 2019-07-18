import React, {Component} from 'react';
import './Login.css';
import {Router, Route, Switch, Redirect, Link} from 'react-router-dom';
import CreatableSelect from 'react-select/lib/Creatable';


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: "",
            redirect: false
        };
    }
    
    handleLogin = () => {
        console.log(this.state.user.value);
        localStorage.setItem('user', this.state.user.value);
        
        let Name = this.state.user.value;
        let user = {
            Name,
        }
        
        this.props.postUserAPI(user);
        //this.props.handleUserUpdate();
        this.setState({redirect: true});
    }
    
    handleUserChange = (user) => {
        console.log("called");
        console.log("user");
        this.setState({user: user});
    }
    
    
    componentWillMount = () => {
        this.props.getUsersAPI().then((res) => {
             let options = [];
             res.forEach((user) => {
                 let value = user.Name;
                 let label = user.Name;
                 let option = {
                     value: value,
                     label: label,
                 }
                 options.push(option);
             });
             this.setState({users: options});
        });
    }

    render() {
        if (this.state.redirect){
            this.props.handleUserUpdate();
            let path = "/";
            return <Redirect to={path}/>
        }
        
        return (
            <div className="loginbox">
                Select/Create User 
                <CreatableSelect
                    inputProps={{autoComplete: 'off', autoCorrect: 'off', spellCheck: 'off' }}
                    isSearchable={true}
                    className="dropdownlogin"
                    value={this.state.user}
                    onChange={this.handleUserChange}
                    options={this.state.users}
                    placeholder="Type your name"
                />
                <button 
                    className="buttonlogin" 
                    onClick={this.handleLogin}>
                    Login
                </button>
            </div>
        );
    }
}
