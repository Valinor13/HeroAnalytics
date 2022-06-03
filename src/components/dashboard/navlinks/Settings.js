import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench } from '@fortawesome/free-solid-svg-icons';

function Settings() {
  return (
    <>
      <div className="dashboardNavDisplay">
        <FontAwesomeIcon className="navLinkIcon" icon={faWrench} />
        <div className="dashboardMainHeader">
          <h3>Settings</h3>
          <p>
            This dashboard page is under construction...
          </p>
        </div>
      </div>
    </>
  );
}

export default Settings;
