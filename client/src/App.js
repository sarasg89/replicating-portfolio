import React, { useState } from 'react';
import Navbar from './components/navigation';
import Footer from './components/footer';
import Home from './components/pages/home';
import Projects from './components/pages/projects';
import Contact from './components/pages/contact';
import Resume from './components/pages/resume';
import './styles/style.css'

const projects = [
  {
    id: "1",
    img: require("./images/project-prints.png"),
    alt: "wedding stationery site",
    name: "Happily Ever Prints ",
    github: "https://github.com/weddingprintproj3/HappilyEverPrints",
    deployed: "https://radiant-island-05643.herokuapp.com/",
    description: "For this project we aimed to create a user-friendly platform that would allow couples to design their own wedding stationery. The goal was to provide a suite of tools to create unique, personalised designs that align with any theme. By eliminating the need for professional designers and offering print on-demand services, our platform helps reduce costs and eliminates excess production.",
    tech: "CSS, JavaScript, React, MongoDB, Mongoose, Express, Node.js, Stripe"
  },
  {
    id: "2",
    img: require("./images/project-foodie.png"),
    alt: "feed the foodie home page",
    name: "Feed the Foodie ",
    github: "https://github.com/sarasg89/feed-the-foodie",
    deployed: "https://sarasg89.github.io/feed-the-foodie/",
    description: "This website helps the user come up with recipe ideas but also suggests nearby restaurants that would match the cuisine they're interested in. Both searches are facilitated by 3rd party APIs, Sponacular and Tripadvisor respectively.",
    tech: "HTML, CSS, JavaScript, Tailwind, 3rd Party APIs, CORS proxy"
  },
  {
    id: "3",
    img: require("./images/project-vet-set-go.png"),
    alt: "vet office site",
    name: "Vet Set Go ",
    github: "https://github.com/sarasg89/vet-set-go",
    deployed: "https://whispering-atoll-81066.herokuapp.com/",
    description: "This website allows users to create an account and add pet profiles to their account. Users can then view the pet records and vet's notes. Users can also book new appointments and participate in a Q&A forum.",
    tech: "HTML, JavaScript, Bulma, Handlebars, Node.js, JawsDB"
  },
  {
    id: "4",
    img: require("./images/project-blog.png"),
    alt: "blog",
    name: "CMS-style blog ",
    github: "https://github.com/sarasg89/night-and-blog",
    deployed: "https://sheltered-basin-73673.herokuapp.com/",
    description: "This is a CMS-Style blog site similar to a Wordpress site, where users can publish their blog posts and comment on other users' posts as well. This site was built using the Model-View-Controller (MVC) paradigm in its architectural structure, using Handlebars.js as the template language, Sequelize as the ORM, and the express-session npm package for authentication.",
    tech: "JavaScript, Node.JS, Sequelize, Handlebars, Express"
  },
  {
    id: "5",
    img: require("./images/project-backend-commerce.png"),
    alt: "E-commerce back-end API",
    name: "E-commerce back-end ",
    github: "https://github.com/sarasg89/four-commerce-of-the-earth",
    deployed: " ",
    description: "I configured a working Express.js API to use Sequelize to interact with a MySQL database.",
    tech: "JavaScript, Node.js, CLI"
  },
  {
    id: "6",
    img: require("./images/project-books.png"),
      alt: "Book search engine app",
      name: "Book search engine application ",
      github: "https://github.com/sarasg89/find-me-a-book",
      deployed: "https://find-me-a-book.herokuapp.com/",
      description: "For this project, I took a fully functioning Google Books API search engine built with a RESTful API, and refactored it to be a GraphQL API built with Apollo Server. The app was built using the MERN stack, with a React front end, MongoDB database, and Node.js/Express.js server and API."
  }
]

export function Container() {
  const [currentPage, setCurrentPage] = useState('Home');

  // Check which page is selected and return the corresponding component
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Projects') {
      return <Projects projects={projects} />;
    }
    if (currentPage === 'Contact') {
      return <Contact />
    }
    if (currentPage === 'Resume') {
      return <Resume />
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <>
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      </>
      <main>
        {renderPage()}
      </main>
    </>
  );
}

function App() {
  return (
    <>
      <Container />
      <Footer />
    </>
  )
}

export default App;