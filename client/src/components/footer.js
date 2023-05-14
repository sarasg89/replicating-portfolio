import React from 'react';
import '../styles/navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <footer className="bg-opacity-75 text-center text-dark mb-0 mt-auto">
            <div className="container">
                <a className="btn btn-link btn-floating btn-lg text-dark" href="https://www.linkedin.com/in/sara-seoane-garcia/"
                    role="button" target="_blank" rel='noreferrer'>
                    <FontAwesomeIcon icon={faLinkedinIn} size="xl"/></a>
                <a className="btn btn-link btn-floating btn-lg text-dark" href="https://github.com/sarasg89" role="button"
                    target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faGithub} size="xl"/></a>
                <a className="btn btn-link btn-floating btn-lg text-dark" role="button" href="mailto:#" target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faEnvelope} size="xl"/></a>
            </div>
            <div className="text-center text-dark">
                <p>© 2023 Sara Seoane García</p>
            </div>
        </footer>
    )
}

export default Footer;