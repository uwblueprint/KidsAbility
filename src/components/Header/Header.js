import React, {Component} from 'react';
import Menu from '../../../src/components/Header/Menu/Menu';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <header>
                <div className="header-container">
                    <div className="logo-container">RocketCare</div>
                    <div>
                        <Menu/>
                    </div>
                </div>
            </header>

        );
    }
}