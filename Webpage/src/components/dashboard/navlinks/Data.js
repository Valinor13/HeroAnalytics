import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPieChart } from '@fortawesome/free-solid-svg-icons';

function Data() {
  return (
    <>
      <div className="dashboardNavDisplay">
        <FontAwesomeIcon className="navLinkIcon" icon={faPieChart} />
        <div className="dashboardMainHeader">
          <h3>Consumer Data</h3>
          <p>
            This dashboard page is under construction...
          </p>
        </div>
      </div>
    </>
  );
}

export default Data;
