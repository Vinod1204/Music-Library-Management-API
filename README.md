# MERN Stack

## Introduction
Welcome to the README for the Music-Library-Management-API built using the MERN Stack.

## MERN Stack Overview
A free and open-source JavaScript software stack for creating dynamic websites and web applications

M: The typical NoSQL database is MongoDB.
E: The standard web application framework for creating RESTful APIs is Express.js.
R: The JavaScript library React.js, which is used to create user interface elements.
N: Node.js is an open-source server environment that runs on multiple operating systems, including Windows, Linux, Unix, and macOS.
These technologies work together to create single-page web apps that are quickly loaded, perform well, and provide seamless user experiences.
Windows, Linux, Unix, macOS, and more...


## Project Objectives

Developed a RESTful API that allows users to manage their music library.
Created a Music Library Management API in order to manage the artists, tracks, and albums in an organization's library. 
One administrator is in charge of the system and its users for each organization.
Users can also mark their favorite artists, albums, and tracks for easy access and customization via the API.



The following directories are present in the project directory:

- **music-library-frontend**: This directory contains the React.js-built client-side source code for the admin interface.
-  This includes the React.js-built client interface's client-side source code.
- **music-library-api**: Contains the Node.js and Express.js server-side source code.


## How to Use

You can explore the music library, add tracks to your favorites, register, log in, and manage your playlist once you've accessed the API. Logging in with admin privileges will allow you to manage artists, albums, tracks, and user accounts.

### Running the API locally

```
cd music-library-api
npm install
npm run dev
```
This command starts `src/server.js` via nodemon and serves the REST endpoints on the configured port.

### Frontend configuration

Create a `.env` file inside `music-library-frontend` and specify your API URL:

```
REACT_APP_API_URL=https://api.example.com/api
```

The React app falls back to `http://localhost:5000/api` when this variable is not set.


## Principal Technology

**Back-end**: Node.js, Express.js, MongoDB
**Package and Tool Management**: npm, Git
**Front-end**: React.js, HTML, CSS, JavaScript
**Security Middleware**: Helmet (recommended)



## Author
- **Name**: Vinod M
- **Contact**: vinodmurugan12@gmail.com
