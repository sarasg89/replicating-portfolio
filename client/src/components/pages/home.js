import React from 'react';
import '../../styles/style.css';
import Projects from './projects';

export default function Home() {
    return (
        <section id="about-me" className="container my-3">
            <h6 className="lh-lg">Hi, my name is</h6>
            <h1 className="lh-lg">Sara Seoane García.</h1>
            <h4 className="lh-lg">Full stack developer.</h4>
            <p className="lh-lg pt-5">I am a part-time student at UofT's Coding Bootcamp in the evening and full-time Project Accountant during the day.
                For the last 6 months I have been learning the fundamentals of web development and I am excited to continue to learn and grow as a developer.
                The projects I have worked on so far required the following technologies: HTML, CSS, JavaScript, jQuery, Node.js, Express.js, MySQL, MongoDB, React.js, and Bootstrap.
            </p>
            <div className="d-flex justify-content-center my-5">
                <a
                    role="button"
                    className="btn btn-secondary"
                    href="/#projects"
                    >
                    Check out my projects!
                </a>
            </div>
        </section>
    )
}