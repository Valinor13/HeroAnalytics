import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { useExp } from '../../../context/ExpProvider';
import './Navlinks.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const tableHeaders = ['Gaze', 'Proximity', 'Touch'];

function Insights() {
  const { expName, userExperiences, firestoreError } = useExp();

  const logoAGazeArray = [];
  const logoAProximityArray = [];
  const logoATouchArray = [];
  const logoBGazeArray = [];
  const logoBProximityArray = [];
  const logoBTouchArray = [];
  const logoCGazeArray = [];
  const logoCProximityArray = [];
  const logoCTouchArray = [];

  userExperiences.forEach((experience) => {
    logoAGazeArray.push(experience.logoA.gaze);
    logoAProximityArray.push(experience.logoA.proximity);
    logoATouchArray.push(experience.logoA.touch);
    logoBGazeArray.push(experience.logoB.gaze);
    logoBProximityArray.push(experience.logoB.proximity);
    logoBTouchArray.push(experience.logoB.touch);
    logoCGazeArray.push(experience.logoC.gaze);
    logoCProximityArray.push(experience.logoC.proximity);
    logoCTouchArray.push(experience.logoC.touch);
  });

  const logoAGazeAvg =
    logoAGazeArray.reduce((a, b) => a + b, 0) / logoAGazeArray.length;
  const logoAProximityAvg =
    logoAProximityArray.reduce((a, b) => a + b, 0) / logoAProximityArray.length;
  const logoATouchAvg =
    logoATouchArray.reduce((a, b) => a + b, 0) / logoATouchArray.length;
  const logoBGazeAvg =
    logoBGazeArray.reduce((a, b) => a + b, 0) / logoBGazeArray.length;
  const logoBProximityAvg =
    logoBProximityArray.reduce((a, b) => a + b, 0) / logoBProximityArray.length;
  const logoBTouchAvg =
    logoBTouchArray.reduce((a, b) => a + b, 0) / logoBTouchArray.length;
  const logoCGazeAvg =
    logoCGazeArray.reduce((a, b) => a + b, 0) / logoCGazeArray.length;
  const logoCProximityAvg =
    logoCProximityArray.reduce((a, b) => a + b, 0) / logoCProximityArray.length;
  const logoCTouchAvg =
    logoCTouchArray.reduce((a, b) => a + b, 0) / logoCTouchArray.length;

  const gazeData = {
    labels: ['Logo A', 'Logo B', 'Logo C'],
    datasets: [
      {
        label: 'Gaze',
        data: [logoAGazeAvg, logoBGazeAvg, logoCGazeAvg],
        backgroundColor: [
          'rgba(33, 198, 246, 0.2)',
          'rgba(222, 57, 9, 0.2)',
          'rgba(160, 72, 192, 0.2)',
        ],
        borderColor: [
          'rgba(33, 198, 246, 1)',
          'rgba(222, 57, 9, 1)',
          'rgba(160, 72, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const proximityData = {
    labels: ['Logo A', 'Logo B', 'Logo C'],
    datasets: [
      {
        label: 'Gaze',
        data: [logoAProximityAvg, logoBProximityAvg, logoCProximityAvg],
        backgroundColor: [
          'rgba(33, 198, 246, 0.2)',
          'rgba(222, 57, 9, 0.2)',
          'rgba(160, 72, 192, 0.2)',
        ],
        borderColor: [
          'rgba(33, 198, 246, 1)',
          'rgba(222, 57, 9, 1)',
          'rgba(160, 72, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const touchData = {
    labels: ['Logo A', 'Logo B', 'Logo C'],
    datasets: [
      {
        label: 'Gaze',
        data: [logoATouchAvg, logoBTouchAvg, logoCTouchAvg],
        backgroundColor: [
          'rgba(33, 198, 246, 0.2)',
          'rgba(222, 57, 9, 0.2)',
          'rgba(160, 72, 192, 0.2)',
        ],
        borderColor: [
          'rgba(33, 198, 246, 1)',
          'rgba(222, 57, 9, 1)',
          'rgba(160, 72, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

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
          <h4 style={{ paddingTop: '5px' }}>{expName}</h4>
        </div>
      </div>
      <div className="dashboardMainBody">
        <div className="dashboardMainBodyCharts">
          <div className="dashboardMainBodyChart">
            <div className="chartBox">
              <h6>Gaze</h6>
              <Doughnut
                className="doughnutChart"
                data={gazeData}
                datasetIdKey="Gaze"
              />
            </div>
            <div className="chartBox">
              <h6>Proximity</h6>
              <Doughnut
                className="doughnutChart"
                data={proximityData}
                datasetIdKey="Proximity"
              />
            </div>
            <div className="chartBox">
              <h6>Touch</h6>
              <Doughnut
                className="doughnutChart"
                data={touchData}
                datasetIdKey="Touch"
              />
            </div>
          </div>
          <div className="dashboardMainBodyChart">Content Incoming...</div>
        </div>
        {userExperiences.map((experience, index) => (
          <div key={index} className="dashboardMainBodyTable">
            <Table responsive striped>
              <thead>
                <tr>
                  <th>{`User ${experience.userID}`}</th>
                  {tableHeaders.map((header, index) => (
                    <th key={index}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="skinnyCell">
                    {experience.favoriteLogo === 'logoA' ? 'Logo A*' : 'Logo A'}
                  </td>
                  <td>{experience.logoA.gaze}</td>
                  <td>{experience.logoA.proximity}</td>
                  <td>{experience.logoA.touch}</td>
                </tr>
                <tr>
                  <td className="skinnyCell">
                    {experience.favoriteLogo === 'logoB' ? 'Logo B*' : 'Logo B'}
                  </td>
                  <td>{experience.logoB.gaze}</td>
                  <td>{experience.logoB.proximity}</td>
                  <td>{experience.logoB.touch}</td>
                </tr>
                <tr>
                  <td className="skinnyCell">
                    {experience.favoriteLogo === 'logoC' ? 'Logo C*' : 'Logo C'}
                  </td>
                  <td>{experience.logoC.gaze}</td>
                  <td>{experience.logoC.proximity}</td>
                  <td>{experience.logoC.touch}</td>
                </tr>
              </tbody>
            </Table>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                paddingTop: '8px',
              }}
            >
              <div>
                <p style={{ paddingRight: '3vw', paddingLeft: '8px' }}>
                  Rating
                </p>
                <p style={{ paddingRight: '3vw', paddingLeft: '8px' }}>
                  Review
                </p>
                <p style={{ paddingRight: '3vw', paddingLeft: '8px', width: '148px' }}>
                  * = Favorite
                </p>
              </div>
              <div>
                <p>{experience.analyzed_sentiment}</p>
                <p className="reviewCell">{experience.transcription}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Insights;
