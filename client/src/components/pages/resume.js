import React from 'react';
import '../../styles/style.css'
import { downloadFile } from '../../utils/API';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';

function Resume() {
    return (
        <section className='container my-5'>
            <h1 className="mx-auto text-center pb-5">Check out my resume:</h1>
            <div className="mx-auto text-center gap-2 pb-3">
                <button id="download-resume" className="btn btn-secondary" onClick={downloadFile}> Download <FontAwesomeIcon icon={faFilePdf} /></button>
            </div>
            <img id="resume-img" className="img-fluid p-4" src={require('../../images/resume1.png')} alt="sara's sample resume" />
            <img id="resume-img" className="img-fluid p-4" src={require('../../images/resume2.png')} alt="sara's sample resume" />
        </section>
    )
}

export default Resume;