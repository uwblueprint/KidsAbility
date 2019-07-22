import React, {Component} from 'react';
import './Login.css';
import {Redirect} from 'react-router';
import SignInDesk from './sign_in_desk.png';
import KidsabilityLogo from './kidsability_logo.png';
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
            <div className="title-page">
                <div className="loginimage">
                    <img className="title-image" src={SignInDesk} alt=""/>
                </div>
                <div className="loginbox">
                    <img src={KidsabilityLogo} alt="" align="left"/>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h1 align="left"> Select User </h1>
                    <h4 align="left"> Choose your profile to search for and save times </h4>
                    <CreatableSelect
                        inputProps={{autoComplete: 'off', autoCorrect: 'off', spellCheck: 'off' }}
                        isSearchable={true}
                        className="dropdownlogin"

                        onChange={this.handleUserChange}
                        options={this.state.users}
                        placeholder="Type your name or select from dropdown"
                    />
                    <button 
                        className="buttonlogin" 
                        onClick={this.handleLogin}>
                        Sign In
                    </button>
                </div>
            </div>
        );
    }
}
