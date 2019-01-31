import React, {Component} from 'react';

export default class View extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="container">
                <h2>View page :)</h2>
            </div>
        );
    }
}