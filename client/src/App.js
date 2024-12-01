import React, { useState } from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  // State to keep track of the current page
  const [currentPage, setCurrentPage] = useState('home');

  // Function to change the page
  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav style={{ padding: '10px', backgroundColor: '#333', color: '#fff' }}>
        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
          <li style={{ display: 'inline', marginRight: '20px' }}>
            <button
              onClick={() => handleNavigation('home')}
              style={{ color: '#fff', background: 'none', border: 'none', textDecoration: 'underline' }}
            >
              Home
            </button>
          </li>
          <li style={{ display: 'inline', marginRight: '20px' }}>
            <button
              onClick={() => handleNavigation('about')}
              style={{ color: '#fff', background: 'none', border: 'none', textDecoration: 'underline' }}
            >
              About
            </button>
          </li>
          <li style={{ display: 'inline' }}>
            <button
              onClick={() => handleNavigation('contact')}
              style={{ color: '#fff', background: 'none', border: 'none', textDecoration: 'underline' }}
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>

      {/* Render the current page based on the state */}
      {currentPage === 'home' && <Home />}
      {currentPage === 'about' && <About />}
      {currentPage === 'contact' && <Contact />}
    </div>
  );
}

export default App;
