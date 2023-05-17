import React from 'react';
import '../../styles/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Projects(props) {
    return (
        <div id="project-container" className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-5">
            {props.projects.map(proj => (
                <div className="col" key={proj.id}>
                    <div className="card h-100">
                        <img src={proj.img} className="card-img-top h-100" alt={proj.alt} />
                        <div className="card-body">
                            <h5 className="card-title py-3">{proj.name}<a href={proj.github} role="button"
                                target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faGithub} /></a> <a href={proj.deployed} role="button"
                                    target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faCirclePlay} /></a></h5>
                            <p className="card-text">
                                {proj.description}
                            </p>
                            <p className="card-text"><small className="text-body-secondary">{proj.tech}</small></p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Projects;