import React from 'react';
import './components.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} NGO Name. All rights reserved.</p>
                <p>
                    <a href="/about">About Us</a> | <a href="/volunteer">Volunteer</a> | <a href="/contact">Contact</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;