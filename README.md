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
  Please download the following version of Python - `Python 3.9.1 amd 64` (Windows)
  Here is the link: `https://www.python.org/ftp/python/3.9.1/python-3.9.1-amd64.exe`
  And then execute the downloaded file.

* pip
  To install this, please type the following commands in the command line: (Windows)
  ```sh
  curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
  py get-pip.py
  ```

* virtualenv
  Now you must navigate to where pip is installed by using the following command:
  ```sh
  cd {The path where pip was installed}
  ```
  and then run the following command:
  ```sh
  .\pip.exe install virtualenv
  ```


### Installation

1. Download the repo as a zip file or clone it using the below command. If you download it as a zip, you need to unzip it somewhere.
   ```sh
   git clone git@github.com:anirvanBhaduri/elimra-data-uploader.git 
   ```
2. Open a file explorer and navigate to the folder which you just downloaded (elimra-data-uploader). Then run the `Setup.bat` file by double-clicking it.
3. Step 2 will have created a `.env` file. Open this file with some editor and change the values within to appropriate values. The values inside this file
   will determine if the application runs correctly.
4. Once you have correctly populated the `.env` file, double-click the `Run.bat` file. This will run the application.
5. To see logs, go to `logger/logs`.



<!-- ROADMAP -->
## Roadmap

Update code to run using node.
Change frontend to simply store the config as a json file upon submit.
Run the backend atman or bosch process using the command line (or a bat file).



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
