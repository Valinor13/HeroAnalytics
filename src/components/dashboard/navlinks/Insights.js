import React from "react";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { useExp } from "../../../context/ExpProvider";
import "./Navlinks.css";

const tableHeaders = ["Favorite", "Review", "Gaze", "Proximity", "Touch"];

function Insights() {
  const { expName, userExperiences, firestoreError } = useExp();

  return (
    <>
      <div className="dashboardNavDisplay">
        <FontAwesomeIcon className="navLinkIcon" icon={faChartLine} />
        <div className="dashboardMainHeader">
          <h3>Consumer Insights</h3>
          <p>
            This dashboard visualizes data gleaned from your Virtual Reality
            experiences
          </p>
          {firestoreError && <p>{firestoreError}</p>}
        </div>
        <div className="dashboardFolderTab">
          <h4 style={{ paddingTop: "5px" }}>{expName}</h4>
        </div>
      </div>
      <div className="dashboardMainBody">
        <div className="dashboardMainBodyCharts">
          <div className="dashboardMainBodyChart">Content Incoming...</div>
          <div className="dashboardMainBodyChart">Content Incoming...</div>
        </div>
        {userExperiences.map((experience, index) => (
          <div key={index} className="dashboardMainBodyTable">
            <Table responsive striped>
              <thead>
                <tr>
                  <th>{`User ${experience.userId}`}</th>
                  {tableHeaders.map((header, index) => (
                    <th key={index}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td>{experience.favoriteLogo}</td>
                  <td>{experience.reviewTranscript}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Logo A</td>
                  <td></td>
                  <td></td>
                  <td>{experience.logoA.gaze}</td>
                  <td>{experience.logoA.proximity}</td>
                  <td>{experience.logoA.touch}</td>
                </tr>
                <tr>
                  <td>Logo B</td>
                  <td></td>
                  <td></td>
                  <td>{experience.logoB.gaze}</td>
                  <td>{experience.logoB.proximity}</td>
                  <td>{experience.logoB.touch}</td>
                </tr>
                <tr>
                  <td>Logo C</td>
                  <td></td>
                  <td></td>
                  <td>{experience.logoC.gaze}</td>
                  <td>{experience.logoC.proximity}</td>
                  <td>{experience.logoC.touch}</td>
                </tr>
              </tbody>
            </Table>
          </div>
        ))}
      </div>
    </>
  );
}

export default Insights;
