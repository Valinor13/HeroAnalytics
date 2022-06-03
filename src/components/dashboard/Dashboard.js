import React from 'react';
import { ExpProvider } from '../../context/ExpProvider';
import Header from './Header';
import Main from './Main';
import './Dashboard.css';

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
