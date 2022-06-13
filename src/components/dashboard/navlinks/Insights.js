import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { useExp } from "../../../context/ExpProvider";
import "./Navlinks.css";

ChartJS.register(
  ArcElement,
  Tooltip,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["Logo A", "Logo B", "Logo C"];
const storeLogos = ["logoA", "logoB", "logoC"];
const tableHeaders = ["Gaze", "Proximity", "Touch", "Rating"];

// Insights - Loads the insights page by creating the doughnut and bar charts
//            and the tables based on dynamic data loaded in from the database
//            that was passed through the ExpProvider and accumulated in the
//            charts and indivualized in the tables
//          - Displays the doughnut chart of the user's gaze, proximity, touch
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
  const sentimentDic = {
    logoA: { positive: 0, neutral: 0, ecstatic: 0 },
    logoB: { positive: 0, neutral: 0, ecstatic: 0 },
    logoC: { positive: 0, neutral: 0, ecstatic: 0 },
  };

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
    sentimentDic[experience.favoriteLogo][experience.analyzed_sentiment] += 1;
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

  const logoOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: false,
        text: "Accumalated Average",
      },
    },
  };

  const sentimentOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Sentiment Analysis",
      },
    },
  };

  const sentimentData = {
    labels,
    datasets: [
      {
        label: "Neutral",
        data: storeLogos.map((logo) => sentimentDic[logo].neutral),
        backgroundColor: "rgba(228, 57, 73, 0.7)",
      },
      {
        label: "Positive",
        data: storeLogos.map((logo) => sentimentDic[logo].positive),
        backgroundColor: "rgba(242, 243, 68, 0.7)",
      },
      {
        label: "Ecstatic",
        data: storeLogos.map((logo) => sentimentDic[logo].ecstatic),
        backgroundColor: "rgba(98, 238, 212, 0.7)",
      },
    ],
  };

  const gazeData = {
    labels: ["Logo A", "Logo B", "Logo C"],
    datasets: [
      {
        label: "Gaze",
        data: [logoAGazeAvg, logoBGazeAvg, logoCGazeAvg],
        backgroundColor: [
          "rgba(33, 198, 246, 0.2)",
          "rgba(222, 57, 9, 0.2)",
          "rgba(160, 72, 192, 0.2)",
        ],
        borderColor: [
          "rgba(33, 198, 246, 1)",
          "rgba(222, 57, 9, 1)",
          "rgba(160, 72, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const proximityData = {
    labels: ["Logo A", "Logo B", "Logo C"],
    datasets: [
      {
        label: "Gaze",
        data: [logoAProximityAvg, logoBProximityAvg, logoCProximityAvg],
        backgroundColor: [
          "rgba(33, 198, 246, 0.2)",
          "rgba(222, 57, 9, 0.2)",
          "rgba(160, 72, 192, 0.2)",
        ],
        borderColor: [
          "rgba(33, 198, 246, 1)",
          "rgba(222, 57, 9, 1)",
          "rgba(160, 72, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const touchData = {
    labels: ["Logo A", "Logo B", "Logo C"],
    datasets: [
      {
        label: "Gaze",
        data: [logoATouchAvg, logoBTouchAvg, logoCTouchAvg],
        backgroundColor: [
          "rgba(33, 198, 246, 0.2)",
          "rgba(222, 57, 9, 0.2)",
          "rgba(160, 72, 192, 0.2)",
        ],
        borderColor: [
          "rgba(33, 198, 246, 1)",
          "rgba(222, 57, 9, 1)",
          "rgba(160, 72, 192, 1)",
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
      </div>
      <div className="dashboardMainBody">
        <div className="dashboardFolderTab">
          <h4 style={{ paddingTop: "5px" }}>{expName}</h4>
        </div>
        <div className="dashboardMainBodyCharts">
          <div className="dashboardMainBodyChart">
            <Bar
              className="barChart"
              options={sentimentOptions}
              data={sentimentData}
            />
          </div>
          <div className="dashboardMainBodyChart">
            <div className="chartBox">
              <h6>Gaze</h6>
              <Doughnut
                className="doughnutChart"
                options={logoOptions}
                data={gazeData}
                datasetIdKey="Gaze"
              />
            </div>
            <div className="chartBox">
              <h6>Proximity</h6>
              <Doughnut
                className="doughnutChart"
                options={logoOptions}
                data={proximityData}
                datasetIdKey="Proximity"
              />
            </div>
            <div className="chartBox">
              <h6>Touch</h6>
              <Doughnut
                className="doughnutChart"
                options={logoOptions}
                data={touchData}
                datasetIdKey="Touch"
              />
            </div>
          </div>
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
                    {experience.favoriteLogo === "logoA"
                      ? "Logo A *"
                      : "Logo A"}
                  </td>
                  <td>{experience.logoA.gaze}</td>
                  <td>{experience.logoA.proximity}</td>
                  <td>{experience.logoA.touch}</td>
                  <td>
                    {experience.analyzed_sentiment === null
                      ? null
                      : experience.favoriteLogo === "logoA"
                      ? experience.analyzed_sentiment.charAt(0).toUpperCase() +
                        experience.analyzed_sentiment.slice(1)
                      : null}
                  </td>
                </tr>
                <tr>
                  <td className="skinnyCell">
                    {experience.favoriteLogo === "logoB"
                      ? "Logo B *"
                      : "Logo B"}
                  </td>
                  <td>{experience.logoB.gaze}</td>
                  <td>{experience.logoB.proximity}</td>
                  <td>{experience.logoB.touch}</td>
                  <td>
                    {experience.analyzed_sentiment === null
                      ? null
                      : experience.favoriteLogo === "logoB"
                      ? experience.analyzed_sentiment.charAt(0).toUpperCase() +
                        experience.analyzed_sentiment.slice(1)
                      : null}
                  </td>
                </tr>
                <tr>
                  <td className="skinnyCell">
                    {experience.favoriteLogo === "logoC"
                      ? "Logo C *"
                      : "Logo C"}
                  </td>
                  <td>{experience.logoC.gaze}</td>
                  <td>{experience.logoC.proximity}</td>
                  <td>{experience.logoC.touch}</td>
                  <td>
                    {experience.analyzed_sentiment === null
                      ? null
                      : experience.favoriteLogo === "logoC"
                      ? experience.analyzed_sentiment.charAt(0).toUpperCase() +
                        experience.analyzed_sentiment.slice(1)
                      : null}
                  </td>
                </tr>
              </tbody>
            </Table>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                paddingTop: "8px",
              }}
            >
              <div>
                <p style={{ paddingRight: "3vw", paddingLeft: "8px" }}>
                  Review
                </p>
                <p
                  style={{
                    paddingRight: "3vw",
                    paddingLeft: "8px",
                    width: "175px",
                  }}
                >
                  * = Favorite
                </p>
              </div>
              <div>
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
