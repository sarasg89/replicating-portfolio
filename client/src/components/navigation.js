import React from 'react';
import '../styles/style.css';
import Header from './header';

function Navbar({ currentPage, handlePageChange }) {
    return (
        <nav className="navbar bg-body-tertiary" role="navigation">
            <Header />
            <ul className="nav justify-content-end p-3 fs-4">
                <li className="nav-item">
                    <a
                        href="#home"
                        onClick={() => handlePageChange('Home')}
                        className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                    >
                        01. About Me
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#Projects"
                        onClick={() => handlePageChange('Projects')}
                        className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
                    >
                        02. Projects
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#Resume"
                        onClick={() => handlePageChange('Resume')}
                        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                    >
                        03. Resume
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#contact"
                        onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                    >
                        04. Contact
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;