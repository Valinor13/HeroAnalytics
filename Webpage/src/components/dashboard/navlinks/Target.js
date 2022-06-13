import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye } from '@fortawesome/free-solid-svg-icons';

function Target() {
  return (
    <>
      <div className="dashboardNavDisplay">
        <FontAwesomeIcon className="navLinkIcon" icon={faBullseye} />
        <div className="dashboardMainHeader">
          <h3>Consumer Target</h3>
          <p>
            This dashboard page is under construction...
          </p>
        </div>
      </div>
    </>
  );
}

export default Target;
