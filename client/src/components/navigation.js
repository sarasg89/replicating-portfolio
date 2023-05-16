import React, { useState } from 'react';
import '../styles/style.css';
import Header from './header';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar({ currentPage, handlePageChange }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div id="big-navbar">
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
                                href="#Contact"
                                onClick={() => handlePageChange('Contact')}
                                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                            >
                                04. Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div id="small-navbar">
                <div className="container text-center">
                    <Header />
                    <Button className="mb-5" variant="secondary" onClick={handleShow} size="lg">
                        <FontAwesomeIcon icon={faBars} size="xl" />
                    </Button>
                </div>

                <Offcanvas show={show} onHide={handleClose} placement="end">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Sara's portfolio website</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <ul className="nav justify-content-end p-3 fs-4">
                            <li className="nav-item">
                                <a
                                    href="#home"
                                    onClick={() => {handlePageChange('Home'); handleClose()}}
                                    className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                                >
                                    01. About Me
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="#Projects"
                                    onClick={() => {handlePageChange('Projects'); handleClose()}}
                                    className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
                                >
                                    02. Projects
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="#Resume"
                                    onClick={() => {handlePageChange('Resume'); handleClose()}}
                                    className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                                >
                                    03. Resume
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="#Contact"
                                    onClick={() => {handlePageChange('Contact'); handleClose()}}
                                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                                >
                                    04. Contact
                                </a>
                            </li>
                        </ul>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
        </>
    )
}

export default Navbar;