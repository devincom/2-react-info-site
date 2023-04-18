import React from 'react';
import logo from '../images/react-icon-small.png';

export default function Navbar() {
    return (
        <header className='nav-bar'>
            <img src={logo}/>
            <h1>ReactFacts</h1>
            <h2>React Course - Project 1</h2>
        </header>
    )
}
