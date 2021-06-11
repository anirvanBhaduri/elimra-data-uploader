<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.png" alt="Logo" width="657" height="303">
  </a>

  <h3 align="center">Elmira Data Uploader</h3>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About the project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About the project

This is the Elmira data uploader. This application is used to connect the In Situ sensor data readings with other interfaces which we used to store and
display sensor data.

### Built With

* [Python](https://www.python.org/)



<!-- GETTING STARTED -->
## Getting Started

The following section contains information about how to install this software.

### Prerequisites

In order to run this application, you must first download the following:

* docker desktop (windows)
  Please download Docker from the following website: https://docs.docker.com/docker-for-windows/install/
  You will need to install Docker and also ensure virtualisation is turned on for your PC.
  You can read here to learn how to enable virtualisation - https://mashtips.com/enable-virtualization-windows-10/

### Installation

1. Download the repo as a zip file or clone it using the below command. If you download it as a zip, you need to unzip it somewhere.
   ```sh
   git clone git@github.com:anirvanBhaduri/elimra-data-uploader.git 
   ```
### Execution

You can then run the project from the root of the git repository using
```sh
docker-compose up
```
Once the containers have been successfully booted, visit `localhost:5000`
on a browser of your choice to use the software.

### Useful links
* [Postman](https://www.postman.com/)
* [Bosch](https://bosch-iot-insights.com/static-contents/docu/html/Data-Ingestion-and-Visualization.html)

You can also use these youtube links for more info:
* https://www.youtube.com/watch?v=uQEeE0_JIdY
* https://www.youtube.com/watch?v=gvcmB2xvHKo

## Using the interface

The project has an interface that exposes the two data loggers it currently 
supports. One is `ATMAN` and the other is `BOSCH`.

### ATMAN
ATMAN requires the following:
* sensor data file path: this file path should be /opt/apps/backend/samples/
* sensor data filename: this is the name of the file with the extension.
* sample rate: this is how often the software reads the sensor data file
and sends the new info to ATMAN
* Data logger ID: this is ID given by ATMAN for the sensor which is being recorded
* Data Logger Token: this is the token used to post data to ATMAN (authentication)
The sensor data file should be placed inside `/opt/apps/backend/samples/` 
to ensure the software works correctly.

### BOSCH
BOSCH requires the following:
* sensor data file path: this file path should be /opt/apps/backend/samples/
* sensor data filename: this is the name of the file with the extension.
* sample rate: this is how often the software reads the sensor data file
* client ID: this comes from bosch and is used for authentication before sending data
* client secret: this comes from bosch and is used for authentication before sending data
* auth scope: this comes from bosch and is used for authentication before sending data
* Things namespace: this is the name of the namespace within your bosch `things` subscription
* Thing name: the name of the thing is the digital twin of the sensor which is registered within bosch things
* Thing feature name: this is the name of the feature for which we are providing data to bosch
The sensor data file should be placed inside `/opt/apps/backend/samples/` 
to ensure the software works correctly.

NOTE: the `Things namespace`, `Thing name` and `Thing feature name` must all
be setup on Bosch IOT before using this software. The software WILL NOT 
work if the setup is wrong or if the value provided does not match what was
registered in Bosch IOT.

### Start, Stop
Once the information for ATMAN or BOSCH has been setup, you can run it
using the `Start` button under the respective section. ATMAN and BOSCH can be
run simultaneously or separately. You can press `Stop` under the respective 
section to then stop the execution of the software for that section.

<!-- ROADMAP -->
## Roadmap

TODO: next feature to build is the live logging on the localhost:5000/ page.
This will require the use of websockets.


<!-- CONTACT -->
## Contact

Anirvan Bhaduri - ani@elimrasupplies.com

Project Link: [https://github.com/anirvanBhaduri/elimra-data-uploader](https://github.com/anirvanBhaduri/elimra-data-uploader)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [IVM](https://www.ivmweb.com/)



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/anirvanb/
