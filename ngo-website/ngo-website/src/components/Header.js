import React from 'react';
import { Link } from 'react-router-dom';
import './components.css';

const Header = () => {
    return (
        <header className="header">
            <nav className="navbar">
                <div className="container">
                    <Link to="/" className="navbar-brand">NGO Name</Link>
                    <div className="navbar-links">
                        <Link to="/">Home</Link>
                        <Link to="/about">About Us</Link>
                        <Link to="/volunteer">Volunteer</Link>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;