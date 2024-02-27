import React, { useState, useEffect } from 'react';
import '../css/login.css';
import Homepage from './Homepage.js';

const Login = ({ setAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const { username, lastActivity } = JSON.parse(storedUser);
      const currentTime = new Date().getTime();
      const tenMinutesInMillis = 10 * 60 * 1000;

      if (currentTime - lastActivity < tenMinutesInMillis) {
        setUsername(username);
        setLoggedIn(true);
        setAuthenticated(true);
      }
    }
  }, [setAuthenticated]);

  const handleLogin = () => {
    if (username === '12' && password === '12') {
      const user = { username, lastActivity: new Date().getTime() };
      localStorage.setItem('user', JSON.stringify(user));
      setLoggedIn(true);
      setAuthenticated(true); 
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setLoggedIn(false);
    setAuthenticated(false);
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
          <form className="main-log-in-screen login-form">
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