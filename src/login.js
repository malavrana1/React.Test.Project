import React, { useState, useEffect } from 'react';
import './css/login.css';
import Homepage from './Homepage.js';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user was previously logged in
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const { username, lastActivity } = JSON.parse(storedUser);
      const currentTime = new Date().getTime();
      const tenMinutesInMillis = 10 * 60 * 1000;

      // Check if the user's last activity is within the last 10 minutes
      if (currentTime - lastActivity < tenMinutesInMillis) {
        setUsername(username);
        setLoggedIn(true);
      }
    }
  }, []);

  const handleLogin = () => {
    if (username === 'rana' && password === 'rana1') {
      const user = { username, lastActivity: new Date().getTime() };
      localStorage.setItem('user', JSON.stringify(user));
      setLoggedIn(true);
    } else {
      alert('Invalid username or password. Please try again.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <Homepage />
          <button type="button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <div>
         <h2 className="login-heading">Login</h2>
         <form className='main-log-in-screen login-form'>
    <label>
      Username:
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </label>
    <br />
    <label>
      Password:
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </label>
    <button type="button" onClick={handleLogin}>
      Login
    </button>
    <br />
  </form>
        </div>
      )}
    </div>
  );
};

export default Login;
