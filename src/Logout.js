// Logout.js

import React from 'react';
import { useHistory } from 'react-router-dom';

const Logout = () => {
  const history = useHistory();

  // Perform any logout logic here

  // Assuming you want to display a message
  const handleLogout = () => {
    // Perform logout logic here
    // For example, clear user authentication state, remove tokens, etc.

    // Redirect to login with a logout success message
    history.push('/login', { logoutSuccess: true });
  };

  return (
    <div>
      <p>Are you sure you want to log out?</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
