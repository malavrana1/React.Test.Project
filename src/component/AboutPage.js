import React from 'react';
import './css/aboutpage.css';

const AboutPage = () => {
  return (
    <div>
      <header>
        <h1>About Me</h1>
      </header>
      <main>
        <h2>Contact Me</h2>
        <p>Email: test@gmail.com</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/your-linkedin-username" target="_blank" rel="noopener noreferrer">Your LinkedIn Profile</a></p>
        <p>GitHub: <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">Your GitHub Profile</a></p>
      </main>
    </div>
  );
};

export default AboutPage;