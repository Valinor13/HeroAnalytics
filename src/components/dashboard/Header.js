import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';
import { Alert } from 'react-bootstrap';
import './Dashboard.css';
import logo from '../../assets/logo.png';

// Header - Creates the header of the dashboard page
//        - Displays the user's email and a logout button
//        - Logs the user out when the logout button is clicked
//        - Displays an error message if the user fails to log out
//        - Displays the logo of the application
function Header() {
  const [error, setError] = useState('');
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  // handleLogout - Logs the user out and displays an error message if the
  //                logout fails in firebase
  async function handleLogout(e) {
    setError('');
    try {
      await logout();
      navigate('/', { replace: true });
    } catch {
      setError('Failed to log out');
    }
  }

  return (
    <header className="dashboardHeader">
      <img className="headerLogo" src={logo} alt="logo" />
      <div className="headerNav">
        <p>
          {currentUser.email}&emsp;&emsp;
          <span onClick={handleLogout} className="logout">
            [-&gt; Log out
          </span>
          ?
        </p>
      </div>
      {error && <Alert variant="danger">{error}</Alert>}
    </header>
  );
}

export default Header;
