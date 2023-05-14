import React from 'react';
import '../../styles/projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Projects() {
    return (
        <div id="project-container" className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
            <div className="col">
                <div className="card h-100">
                    <img src={require("../../images/project-JATE.png")} className="card-img-top" alt="text editor" />
                    <div className="card-body">
                        <h5 className="card-title">Text editor <a href="https://github.com/sarasg89/subpar-text" role="button"
                            target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faGithub} /></a> <a href="https://damp-brook-42422.herokuapp.com/" role="button"
                                target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faCirclePlay} /></a></h5>
                        <p className="card-text">
                            I built a text editor that runs in the browser as a single-page application that also runs offline and can be downloaded as a desktop app. For the database, I used a package called idb, which is a tiny library that mostly mirrors the IndexedDB API. I also used Webpack to bundle the application.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <img src={require("../../images/project-backend-commerce.png")} className="card-img-top" alt="E-commerce back-end API" />
                    <div className="card-body">
                        <h5 className="card-title">E-commerce back-end <a href="https://github.com/sarasg89/four-commerce-of-the-earth" role="button"
                            target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faGithub} /></a></h5>
                        <p className="card-text">
                            This is a longer card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <img src={require("../../images/project-blog.png")} className="card-img-top" alt="blog" />
                    <div className="card-body">
                        <h5 className="card-title">CMS-style blog <a href="https://github.com/sarasg89/night-and-blog" role="button"
                            target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faGithub} /></a> <a href="https://sheltered-basin-73673.herokuapp.com/" role="button"
                                target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faCirclePlay} /></a></h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to
                            additional content.</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <img src={require("../../images/project-social-API.png")} className="card-img-top" alt="API for a social network app" />
                    <div className="card-body">
                        <h5 className="card-title">API for a social network web application <a href="https://github.com/sarasg89/my-social-API" role="button"
                            target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faGithub} /></a></h5>
                        <p className="card-text">
                            This is a longer card with supporting text below as a natural lead-in to
                            additional content.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <img src={require("../../images/project-vet-set-go.png")} className="card-img-top" alt="vet office site" />
                    <div className="card-body">
                        <h5 className="card-title">Vet's office community page <a href="https://github.com/sarasg89/vet-set-go" role="button"
                            target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faGithub} /></a> <a href="https://whispering-atoll-81066.herokuapp.com/" role="button"
                                target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faCirclePlay} /></a></h5>
                        <p className="card-text">
                        he website allows users to create an account and add pet profiles to their account. Users can then view the pet records and vet's notes. Users can also book new appointments and participate in a Q&A forum.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <img src={require("../../images/project-employee-manager.png")} className="card-img-top" alt="office manager on terminal" />
                    <div className="card-body">
                        <h5 className="card-title">CLI application for employee database <a href="https://github.com/sarasg89/office-space" role="button"
                            target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faGithub} /></a></h5>
                        <p className="card-text">
                            This is a longer card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;