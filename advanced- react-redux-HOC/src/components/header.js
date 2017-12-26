import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import * as actions from '../actions/index';

class Header extends Component {
    authButton() {
        const { authenticate, authenticated } = this.props;
        return (
            <button
                onClick={() => authenticate(!authenticated)}
            >
                {authenticated ? 'Sign Out' : 'Sign in'}
            </button>
        );
    }

    render() {
        return (
            <nav className="navbar navbar-light">
                <ul className="nav navbar-nav">
                    <li className="nav-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/resources">Resources</Link>
                    </li>
                    <li className="nav-item">{this.authButton()}</li>
                </ul>
            </nav>
        );
    }
}

function mapStateToProps({ authenticated }) {
    return {
        authenticated
    };
}

export default connect(mapStateToProps, actions)(Header);
