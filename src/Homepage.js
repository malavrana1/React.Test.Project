import React from 'react';
import styles from './css/homepage.css';

const Homepage = () => {
  return (
    <div>
      <header className={styles.header}>
        <h1>Welcome</h1>
        <nav>
          <ul>
            <a href="#about">About Us</a>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Homepage;
