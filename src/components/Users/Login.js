import React, {Component} from 'react';
import Select from 'react-select';
import './Login.css';
import {Router, Route, Switch, Redirect, Link} from 'react-router';


const options5 = [
  {value: "Rebecca", label: "1"},
  {value: 2, label: '2'},
  {value: 3, label: '3'},
  {value: 4, label: '4'},
  {value: 5, label: '5'},
  {value: 6, label: '6'},
  {value: 7, label: '7'},
  {value: 8, label: '8'},
  {value: 9, label: '9'},
  {value: 10, label: '10'}
]


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
        //this.props.handleUserUpdate();
        this.setState({redirect: true});
    }
    
    handleUserChange = (user) => {
        this.setState({user: user});
    }

    render() {
        
        let renderRedirect;
        if (this.state.redirect){
            
            let path = "/";
            return <Redirect to={path}/>
        }
        
        return (
            <div className="loginbox">
                Select User
                <Select 
                  className="dropdownlogin"
                  value={this.state.user}
                  onChange={this.handleUserChange}
                  options={options5}
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