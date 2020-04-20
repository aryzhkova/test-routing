import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './header.scss';

const Header = (props) => {
    const { authorized } = props;
    const buttonAuth = authorized ? 
        <Link to="/logout" className="nav-link">Log out</Link> :
        <Link to="/login" className="nav-link">Log in</Link>;
    return (
        <header className="header">
            <div className="header-container d-flex">
                <h3>
                    <Link to="/">TestApp</Link>
                </h3>
                <nav>
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/profile" className="nav-link">Profile</Link>
                        </li>
                        <li>{buttonAuth}</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

const mapStateToProps = ({userAuthentication: {authorized}} ) => {
    return {
        authorized
    }
}



export default connect(mapStateToProps)(Header);