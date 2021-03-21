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

* python
  TBA - need to get the exact exe used to install on the atom

* pip
  This can be installed using python - here I will document how I set it up on the atom

* virtualenv
  This can be installed using python - will again explain how

### Installation

1. Clone the repo
   ```sh
   git clone git@github.com:anirvanBhaduri/elimra-data-uploader.git 
   ```
2. Go to the cloned repo and create the virtual env
   ```sh
   virtualenv .virtualenv
   ```
3. Activate the virtual env
   (windows)
   ```sh
   .\.virtualenv\Scripts\activate
   ```
4. Copy the env sample file to create the actual env file
   ```sh
   cp .env.sample .env
   ```
5. Populate the .env file with the correct values
6. Run the application
   ```sh
   py main.py
   ```
7. To see logs, go to `logger/logs`.



<!-- ROADMAP -->
## Roadmap

TBA



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
