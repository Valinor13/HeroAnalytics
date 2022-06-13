import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';

function Comments() {
  return (
    <>
      <div className="dashboardNavDisplay">
        <FontAwesomeIcon className="navLinkIcon" icon={faCommentDots} />
        <div className="dashboardMainHeader">
          <h3>Consumer Comments</h3>
          <p>
            This dashboard page is under construction...
          </p>
        </div>
      </div>
    </>
  );
}

export default Comments;
