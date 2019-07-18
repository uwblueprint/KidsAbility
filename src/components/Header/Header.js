import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <header className="Header">
                <Link to="/" className="Header__logo">RocketCare</Link>
                <div className="Header__links">
                    { this.props.user &&
                    <>
                    <Link to="/find-time" className="Header__link">
                        <img src="/icons/search.svg" alt="Search"/>
                        Search
                    </Link>
                    <Link to="/saved" className="Header__link">
                        <img src="/icons/heart.svg" alt="Heart"/>
                        Saved Times
                    </Link>
                    <Link to="/" className="Header__link">
                        <img src="/icons/cancel.svg" alt="Cancel"/>
                        Cancellations
                    </Link>
                    <div className="Header__links-divider" />
                    <div className="Header__link">
                        <img src="/icons/person.svg" alt="Profile"/>
                        { this.props.user }
                    </div>
                    </>
                    }
                    <Link to="/" className="Header__link">
                        <img src="/icons/help.svg" alt="Help"/>
                        Help
                    </Link>
                </div>
            </header>
        );
    }
}