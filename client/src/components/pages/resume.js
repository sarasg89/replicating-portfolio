import React from 'react';
import '../../styles/style.css'
import { downloadFile } from '../../utils/API';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';

function Resume() {
    return (
        <div>
            <h3>Check out my resume!</h3>
            <img id="resume-img" src={require('../../images/resume.png')} alt="sara's sample resume" />
            <button id="download-resume" onClick={downloadFile}><FontAwesomeIcon icon={faFilePdf} /> Download my resume</button>
        </div>
    )
}

export default Resume;