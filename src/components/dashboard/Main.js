import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Stats from './navlinks/Stats';
import Comments from './navlinks/Comments';
import Insights from './navlinks/Insights';
import Data from './navlinks/Data';
import Target from './navlinks/Target';
import Settings from './navlinks/Settings';
import {
  faVrCardboard,
  faCommentDots,
  faChartLine,
  faChartPie,
  faBullseye,
  faWrench,
} from '@fortawesome/free-solid-svg-icons';

const navList = ['Stats', 'Comments', 'Insights', 'Data', 'Target', 'Settings'];

const iconList = [
  faVrCardboard,
  faCommentDots,
  faChartLine,
  faChartPie,
  faBullseye,
  faWrench,
];

function Main() {
  const [navLink, setNavLink] = useState('Insights');

  function handleNavLink(e) {
    setNavLink(e);
  }

  return (
    <div className="dashboardBody">
      <div className="dashboardSidebar">
        {iconList.map((icon, index) => (
          <FontAwesomeIcon
            className="sidebarIcon"
            key={index}
            icon={icon}
            onClick={() => handleNavLink(navList[index])}
          />
        ))}
      </div>
      <div className="dashboardMain">
        {navLink === 'Stats' ? (
          <Stats />
        ) : navLink === 'Comments' ? (
          <Comments />
        ) : navLink === 'Insights' ? (
          <Insights />
        ) : navLink === 'Data' ? (
          <Data />
        ) : navLink === 'Target' ? (
          <Target />
        ) : (
          <Settings />
        )}
      </div>
    </div>
  );
}

export default Main;
