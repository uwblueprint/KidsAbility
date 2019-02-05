import React, {Component} from 'react';

const user = {
    firstName: 'Rebecca',
    lastName: 'Tucker',
};

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

export default class Home extends Component {

    //This is a constructor
    constructor(props) {

        // This is allowing us to use any props that might have been passed from our
        // parent
        super(props);

        // We set 3 states in this contructor (you can set more later) There is an empty
        // string, a boolean and a string (default message) You can set objects, arrays
        // and numbers
        // NOTE: Arrays are Objects but not vice versa An array is basically an ordered
        // object that has significantly less functionality. However, does the advantage
        // of having the .length method

        this.state = {
            message: "",
            MenuButtonEnabled: false,
            changeMessageButton: "Change it to this message"
        };

    }

    // componentWillMount() {} componentDidMount() {} componentWillReceiveProps() {}
    // componentDidUpdate() {} componentWillUnmount() {} componentWillUpdate() {}
    // shouldComponentUpdate() {} getSnapshotBeforeUpdate() {} Previously known as
    // ComponentWillUpdate()
      
    render() {
        return (
            <div className="container">
                <h2>Welcome <b>{formatName(user)}</b></h2>
            </div>
        );
    }
}