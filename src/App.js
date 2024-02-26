import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Homepage from './Homepage.js';
import AboutPage from './AboutPage.js';
import ContactPage from './ContactPage.js';
import Login from './login';

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setAuthenticated(false);
  };
  return (
    <Router>
      <div>
        <div className="menu">
          <ul>
            {!authenticated && (
                <Link to="/"> Go Back To Login </Link>
             
            )}
            {authenticated && (
              <>
                  <Link to="/">Home</Link>
                  <Link to="/about">About</Link>
                  <Link to="/contact">Contact</Link>
                  <button onClick={handleLogout}>Logout</button>
              </>
            )}
          </ul>
        </div>
        <Routes>
          {!authenticated && (
            <Route path="/" element={<Login setAuthenticated={setAuthenticated} />} />
          )}
          {authenticated && (
            <>
              <Route path="/" element={<Homepage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              {/* Add more routes as needed */}
            </>
          )}
          <Route path="/unauthorized" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
