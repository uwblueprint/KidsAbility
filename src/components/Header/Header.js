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
                This is a Header
                <Menu/>
            </header>

        );
    }
}