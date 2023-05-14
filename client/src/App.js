import React, { useState } from 'react';
import Navbar from './components/navigation';
import Footer from './components/footer';
import Home from './components/pages/home';
import Projects from './components/pages/projects';
import Contact from './components/pages/contact';
import Resume from './components/pages/resume';
import './styles/style.css'

export function Container() {
  const [currentPage, setCurrentPage] = useState('Home');

  // Check which page is selected and return the corresponding component
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
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
      <header>
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      </header>
      <main>
        {renderPage()}
      </main>
    </div>
  );
}

function App() {
  return (
    <div>
      <Container />
      <Footer />
    </div>
  )
}

export default App;