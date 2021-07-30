import React from 'react';
import './Header.css';
import H_logo from '../assets/holberton-logo.jpeg';

const Header = () => {
    return (
        <>
            <div className="App-header">
                <img src={H_logo} className="App-logo" alt="logo" />
                <h1 className="title">School dashboard</h1>
            </div>
            <hr className="HR-red"></hr>
        </>
    );
}

export default Header;