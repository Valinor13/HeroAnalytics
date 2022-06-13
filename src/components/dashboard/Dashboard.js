import React from 'react';
import { ExpProvider } from '../../context/ExpProvider';
import Header from './Header';
import Main from './Main';
import './Dashboard.css';

// Dashboard - Creates the dashboard page by loading in the header and main
//             components
// ExpProvider - The context provider that provides the experience state to all
//               dashboard body components
function Dashboard() {
  return (
    <div className="dashboard">
      <Header />
      <ExpProvider>
        <Main />
      </ExpProvider>
    </div>
  );
}

export default Dashboard;
