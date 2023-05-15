import React from 'react';
import '../../styles/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Projects() {
    return (
        <div id="project-container" className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-5">
            <div className="col">
                <div className="card h-100">
                    <img src={require("../../images/project-foodie.png")} className="card-img-top h-100" alt="feed the foodie home page" />
                    <div className="card-body">
                        <h5 className="card-title py-3">Feed the Foodie <a href="https://github.com/sarasg89/feed-the-foodie" role="button"
                            target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faGithub} /></a> <a href="https://sarasg89.github.io/feed-the-foodie/" role="button"
                                target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faCirclePlay} /></a></h5>
                        <p className="card-text">
                            This website helps the user come up with recipe ideas but also suggests nearby restaurants that would match the cuisine they're interested in. Both searches are facilitated by 3rd party APIs, Sponacular and Tripadvisor respectively.
                        </p>
                        <p class="card-text"><small class="text-body-secondary">HTML, CSS, JavaScript, Tailwind, 3rd Party APIs, CORS proxy</small></p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <img src={require("../../images/project-vet-set-go.png")} className="card-img-top h-100" alt="vet office site" />
                    <div className="card-body">
                        <h5 className="card-title py-3">Vet Set Go <a href="https://github.com/sarasg89/vet-set-go" role="button"
                            target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faGithub} /></a> <a href="https://whispering-atoll-81066.herokuapp.com/" role="button"
                                target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faCirclePlay} /></a></h5>
                        <p className="card-text">
                            This website allows users to create an account and add pet profiles to their account. Users can then view the pet records and vet's notes. Users can also book new appointments and participate in a Q&A forum.
                        </p>
                        <p class="card-text"><small class="text-body-secondary">HTML, JavaScript, Bulma, Handlebars, Node.js, JawsDB</small></p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <img src={require("../../images/project-blog.png")} className="card-img-top h-100" alt="blog" />
                    <div className="card-body">
                        <h5 className="card-title py-3">CMS-style blog <a href="https://github.com/sarasg89/night-and-blog" role="button"
                            target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faGithub} /></a> <a href="https://sheltered-basin-73673.herokuapp.com/" role="button"
                                target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faCirclePlay} /></a></h5>
                        <p className="card-text">
                            This is a CMS-Style blog site similar to a Wordpress site, where users can publish their blog posts and comment on other users' posts as well. This site was built using the Model-View-Controller (MVC) paradigm in its architectural structure, using Handlebars.js as the template language, Sequelize as the ORM, and the express-session npm package for authentication.
                        </p>
                        <p class="card-text"><small class="text-body-secondary">HTML, JavaScript, Handlebars, Node.js, ClearDB MySQL</small></p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <img src={require("../../images/project-backend-commerce.png")} className="card-img-top h-100" alt="E-commerce back-end API" />
                    <div className="card-body">
                        <h5 className="card-title py-3">E-commerce back-end <a href="https://github.com/sarasg89/four-commerce-of-the-earth" role="button"
                            target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faGithub} /></a></h5>
                        <p className="card-text">
                            I configured a working Express.js API to use Sequelize to interact with a MySQL database.
                        </p>
                        <p class="card-text"><small class="text-body-secondary">JavaScript, Node.js, CLI</small></p>
                    </div>
                </div>
            </div>
            
            <div className="col">
                <div className="card h-100">
                    <img src={require("../../images/project-social-API.png")} className="card-img-top h-100" alt="API for a social network app" />
                    <div className="card-body">
                        <h5 className="card-title py-3">API for a social network web application <a href="https://github.com/sarasg89/my-social-API" role="button"
                            target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faGithub} /></a></h5>
                        <p className="card-text">
                            This API would enable a social network app's users to share their thoughts, react to friends' thoughts, and create a friend list. This application uses Express.js for routing, a MongoDB database, and the Mongoose ODM.
                        </p>
                        <p class="card-text"><small class="text-body-secondary">JavaScript, Node.js, Express.js, MongoDB, Mongoose</small></p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <img src={require("../../images/project-rain-tracker.png")} className="card-img-top h-100" alt="weather forecast website" />
                    <div className="card-body">
                        <h5 className="card-title py-3">Rain tracker <a href="https://github.com/sarasg89/rain-tracker" role="button"
                            target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faGithub} /></a><a href="https://sarasg89.github.io/rain-tracker/" role="button"
                            target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faCirclePlay} /></a></h5>
                        <p className="card-text">
                            This application retrieves weather data using the OpenWeather API. The user is able to enter the name of a city into a form and obtain the 5-day forecast for that city. The user's search history is saved and displayed below the form. The user can click on a city in the search history and view the current weather and 5-day forecast for that city again.
                        </p>
                        <p class="card-text"><small class="text-body-secondary">HTML, CSS, JavaScript, 3rd Party APIs, Bootstrap</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;