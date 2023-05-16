import React from 'react';
import '../../styles/style.css';
import Projects from './projects';

export default function Home() {
    return (
        <section id="about-me" className="container my-3">
            <h6 className="">Hi, my name is</h6>
            <h1 className="display-1">Sara Seoane García.</h1>
            <h4 className="">Full stack developer.</h4>
            <div className="row align-items-start">
                <p className="lh-lg py-5 col-12 col-md-8">
                    I'm thrilled to showcase my skills and passion as a software developer, specializing in Node.js, MongoDB, Express, React, and various other modern web technologies. With a strong foundation in these technologies, I strive to create robust, scalable, and user-friendly web applications.
                    <br /><br />
                    Driven by curiosity and a desire for continuous learning, I'm always exploring new frameworks, libraries, and best practices to stay at the forefront of the rapidly evolving web development industry. This dedication allows me to leverage cutting-edge tools and techniques to deliver high-quality, efficient, and maintainable code.
                    <br /><br />
                    In addition to technical expertise, I value collaboration, problem-solving, and attention to detail. I believe in building clean, modular, and well-documented code that is not only functional but also easily understandable and maintainable by other developers. I'm also passionate about creating intuitive user experiences by focusing on usability, accessibility, and responsive design principles.
                    <br /><br />
                    On this portfolio website, you'll find a collection of my projects, demonstrating my ability to transform ideas into fully functional applications. Each project showcases my skills in frontend and backend development, database management, API integrations, and more.
                    <br /><br />
                    I'm excited to connect with like-minded professionals, potential collaborators, and clients who are passionate about leveraging technology to drive innovation and solve real-world problems. Whether you have a project in mind or simply want to discuss ideas, feel free to reach out to me through the contact information provided.
                    <br /><br />
                    <span className="fs-5">Thank you for visiting my portfolio website, and I look forward to sharing my work with you!</span>
                </p>
                <img id="home-photo" className="img-fluid col-12 col-md-4 p-5" src={require("../../images/home-photo.jpeg")} alt="Sara with her dog Reggie" />
            </div>
            <div className="d-flex justify-content-center mb-5">
                <a
                    role="button"
                    className="btn btn-secondary mb-5"
                    href="/#projects"
                >
                    Check out my projects!
                </a>
            </div>
        </section>
    )
}