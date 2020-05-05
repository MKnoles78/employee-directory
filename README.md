# Budget-Tracker (Homework Assignment for PWA)

## Purpose

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

The purpose of this assignment is develop an employee directory using React. No files are provice until React is deployed usng `create-react-app`. Once created the application's UI needs to be broken up into components.

## Functionality

The app renders a table of employees which can be sorted and filtered by at least one category and property respectively.

<!-- ![Employee Directory](Images/employeedirectory.gif) -->

## User Story
* As a user, I want to be able to view my entire employee directory at once so that I have quick access to their information.


## Business Context

An employee or manager would benefit greatly from being able to view non-sensitive data about other employees. It would be particularly helpful to be able to filter employees by name.

## Development

1. Create an empty repo on GitHub.
2. Create React app using the name of the repo with the `create-react-app repot-name`
3. Import bootstrap into index.html
4. Clear out the src folder, except for index.js and App.js
5. Cleaned up syntax to accomodate for React.

Once the app has been down to the starting point.  I created an array of employees in the `App.js` file to work with as a starting point.  Another option would be to use an Axios call and find an API which offers a list of names.

Two pages or containers will be used, a home and an employee directory page to display the employees.  Since a NavBar will be used on all pages its placed in a Shared folder.  A employee directory folder was created and a `employees.json` was created to store the array.



