import React from 'react';
import '../../styles/style.css'
import { downloadFile } from '../../utils/API';

function Resume() {
    return (
        <div>
            <h3>Check out my resume!</h3>
            <img id="resume-img" src={require('../../images/resume1.png')} alt="sara's sample resume" />
            <button id="download-resume" onClick={downloadFile}>Download my resume</button>
        </div>
    )
}

export default Resume;