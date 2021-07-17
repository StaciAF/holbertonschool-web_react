import React from 'react';
import './Header.css';
import logo from '../assets/holberton-logo.jpg';

const Header = () => {
    return (
        <>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="title">School dashboard</h1>
            </header>
            <hr className="HR-red"></hr>
        </>
    );
}

export default Header;