import React, { useState } from 'react';
import Navbar from './components/navigation';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/pages/home';
import About from './components/pages/about';
import Projects from './components/pages/projects';
import Contact from './components/pages/contact';
import Resume from './components/pages/resume';

export function Container() {
  const [currentPage, setCurrentPage] = useState('Home');

  // Check which page is selected and return the corresponding component
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
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
    <div>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Container />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App;