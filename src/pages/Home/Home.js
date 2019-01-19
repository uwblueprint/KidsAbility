import React, {Component} from 'react';

export default class Home extends Component {

    //This is a constructor
    constructor(props) {

        // This is allowing us to use any props that might have been passed from our
        // parent
        super(props);

        this.state = {
            message: "",
            MenuButtonEnabled: false,
            changeMessageButton: "Change it to this message"
        };

    }

    render() {
        return (
            <div className="container">
                <h2>Welcome to the home page :)</h2>
            </div>
        );
    }
}