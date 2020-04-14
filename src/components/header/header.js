import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

const Header = () => {
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
                            <Link to="/login" className="nav-link">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/profile" className="nav-link">Profile</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;