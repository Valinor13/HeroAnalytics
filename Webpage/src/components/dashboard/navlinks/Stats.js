import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVrCardboard } from '@fortawesome/free-solid-svg-icons';

function Stats() {
  return (
    <>
      <div className="dashboardNavDisplay">
        <FontAwesomeIcon className="navLinkIcon" icon={faVrCardboard} />
        <div className="dashboardMainHeader">
          <h3>Consumer Stats</h3>
          <p>
            This dashboard page is under construction...
          </p>
        </div>
      </div>
    </>
  );
}

export default Stats;
