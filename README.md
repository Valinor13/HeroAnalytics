<!--
TEMPLATE:
  https://github.com/othneildrew/Best-README-Template/blob/master/BLANK_README.md
-->



<!-- PROJECT LOGO -->

![Hero Logo](/images/heroLogo.JPG)

<br />
<h1 align="center">Hero Analytics</h3>
  <p align="center">
    Hero Analytics is a powerful new tool to gather insights into consumer preferences through the use of data collected from Virtual Reality experiences.
  </p>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <!-- <a href="#getting-started">Getting Started</a> -->
      <!-- <ul> -->
        <!-- <li><a href="#prerequisites">Prerequisites</a></li> -->
        <!-- <li><a href="#installation">Installation</a></li> -->
      <!-- </ul> -->
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <!-- <li><a href="#contributing">Contributing</a></li> -->
    <!-- <li><a href="#license">License</a></li> -->
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project

<!-- (screenshot here) -->

Our goal with creating Hero Analytics is to bring together the worlds of digital marketing and Extended Reality (XR) technologies. We achieve this by giving users a place to evaluate and interact with products in virtual reality, while recording the data the users generate within the experience. This data is then shipped out of VR and evaluated by AI to gather insights before being stored in the database and displayed on the website.

Currently our implementation uses Virtual Reality but in future development we plan to move toward Mixed or Extended Reality.



## Built With

  * [Google Cloud Platform](https://cloud.google.com/ "GCP")
  * [Plastic SCM](https://www.plasticscm.com/ "Plastic SCM")
  * [Unity](https://unity.com/ "Unity")
  * [C#](https://docs.microsoft.com/en-us/dotnet/csharp/ "C#")
  * [Oculus](https://store.facebook.com/quest/?utm_source=www.google.com&utm_medium=oculusredirect "Oculus")
  * [NodeJS](https://nodejs.org/en/ "NodeJS")
  * [ReactJS](https://reactjs.org/ "ReactJS")
  * [Bootstrap](https://getbootstrap.com/ "Bootstrap")
  * [Python](https://www.python.org/ "Python")
  * [Anaconda](https://anaconda.org/ "Anaconda")


<!-- Getting started section? -->



<!-- EXAMPLES -->
## Usage

Our user experience consists of three stages:

When users first enter the space, they are greeted in our introduction room where they are given instructions about the controls and how to move around the space. The instructions are delivered via in-app videos that are pre-recorded.

Here is a sample screenshot from our instruction area:

![Instruction](/images/instruction.jpg)


Afterward, the users are directed to enter the gallery where we encourage them to organically interact with three different objects. During this time, there is data being collected in reference to: what they look at (gaze), what they are near (proximity), and what they physically engage with (touch).

![Gallery](/images/gallery.jpg)


Finally, the users will enter the debrief room. In this room they are instructed to choose their favorite of the objects from the gallery, and provide feedback of the item they chose in the form of a brief audio recording.

![Debrief](/images/debrief.jpg)


Now, the user has completed the whole experience! Short, sweet, and to-the-point.
The data that they've generated is then shipped to Google Cloud Storage where undergoes data analysis using the Speech-to-text and Sentiment Analysis APIs provided by Google Cloud Platform.

This data is then stored in a Firestore database where it can be queried and displayed on our client portal.

![Web Page](/images/webPage.png)
<!-- How does it work? -->



<!-- ROADMAP -->
## Roadmap

- [x] Create VR environment
  - [x] Create trackers for gaze, proximity, and touch
  - [x] Implement voice recordings for users to give verbal reviews
  - [x] Ship collected data to Google Cloud Storage
- [x] Cloud function to process new data
  - [x] Transcribe & analyze voice recordings
  - [x] Store data in Firestore database
- [x] Interactive web page
  - [x] Display data through charts and tables
  - [x] Design UI elements
<!-- - [ ] Next steps? -->



<!-- LICENSE -->
<!-- Nothing yet, maybe add later -->



<!-- CONTACT INFO -->
## Contact
#### Jay Calhoun

  * [LinkedIn](https://www.linkedin.com/in/jwcalhoun2/)
  * [GitHub](https://github.com/Valinor13)

#### Christopher Vandenhende

  * [LinkedIn](https://www.linkedin.com/in/chrisvanndy/)
  * [GitHub](https://github.com/chrisvanndy)

#### Grace Fallon

  * [LinkedIn](https://www.linkedin.com/in/graceleefallon/)
  * [GitHub](https://github.com/angelofgrace)

#### Kyle Gross

  * [LinkedIn](https://www.linkedin.com/in/kyle-gross-swe/)
  * [GitHub](https://github.com/kyle-gross)



<!-- ACKNOWLEDGMENTS
* add resources here -->
## Acknowledgments

* [Google Cloud - Speech to Text](https://cloud.google.com/speech-to-text/docs/basics)
* [Google Cloud - Sentiment Analysis](https://cloud.google.com/natural-language/docs/basics)
