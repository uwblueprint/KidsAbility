import React, {Component} from 'react';
import Select from 'react-select';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: ""
        };
    }
    
    componentWillMount() {
        
    }

    render() {
        return (
            <div className="container">
                SelectUser
                <Select 
                  className="centredropdown"
                  isMulti
                  value={["hi"]}
                  onChange={this.handleChange2}
                  options={this.state.programs}
                />
                <button 
                    className="button" 
                    onClick={this.login}>
                    
                </button>
            </div>
        );
    }
}