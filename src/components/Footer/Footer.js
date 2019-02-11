import React, {Component} from 'react';

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <header>
                <div className="footer-container">
                    <div className="tagline">Made by
                        <a>UW Blueprint</a>
                    </div>
                    <div className="tagline">Copyright????</div>
                </div>
            </header>
        );
    }
}