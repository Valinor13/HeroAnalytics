import { AuthProvider } from '../../context/AuthProvider';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from '../auth/Signup';
import Dashboard from '../dashboard/Dashboard';
import Login from '../auth/Login';
import PrivateRoute from './PrivateRoute';
import ForgotPassword from '../auth/ForgotPassword';
import altLogo from '../../assets/altLogo.png';
import './App.css';

// App - main entry point for the application. This component calls the routes
//       that navigate the website
// AuthProvider - the context provider that provides the authentication state
//                to all components
// BrowserRouter - the router that handles the routing of the application
// PrivateRoute - the route that handles loading the webpage after user is
//                authenticated
function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <div className="authContainer">
                <div className="authPage">
                  <img src={altLogo} alt="logo" className="altLogo" />
                  <div className="signupGhost">
                    <p>Hidden Text</p>
                  </div>
                  <div className="authInsideContainer">
                    <Signup />
                  </div>
                </div>
              </div>
            }
          />
          <Route
            path="/login"
            element={
              <div className="authContainer">
                <div className="authPage">
                  <img src={altLogo} alt="logo" className="altLogo" />
                  <div className="loginGhost">
                    <p>Hidden Text</p>
                  </div>
                  <div className="authInsideContainer">
                    <Login />
                  </div>
                </div>
              </div>
            }
          />
          <Route
            path="/forgot-password"
            element={
              <div className="authContainer">
                <div className="authPage">
                  <img src={altLogo} alt="logo" className="altLogo" />
                  <div className="passwordGhost">
                    <p>Hidden Text</p>
                  </div>
                  <div className="authInsideContainer">
                    <ForgotPassword />
                  </div>
                </div>
              </div>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
