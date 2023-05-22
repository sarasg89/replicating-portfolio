import React from 'react';
import '../styles/style.css';

function Header() {
    return (
        <header>
            <img className="logo-img navbar-brand" src={require('../images/pagelogo.gif')} alt="logo"/>
        </header>
    )
}

export default Header;