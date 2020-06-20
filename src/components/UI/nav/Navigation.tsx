import React from 'react';
import '../styles/navigation.css'
import { NavLink } from 'react-router-dom'

export const Navigation = () => {

    const activeStyle = {
        borderBottom: '2px transparent solid',
        borderColor: '#ff304f',

    };

    return (
        <nav id="main-nav">
            <ul>
                <li><NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink></li>
                <li><NavLink to='/projects' activeStyle={activeStyle}>Projects</NavLink></li>
                <li><NavLink to='/contact' activeStyle={activeStyle}>Contact</NavLink></li>
            </ul>
        </nav>

    );
}
