# TeamProfile-Generator

 ![Github licence](http://img.shields.io/badge/license-MIT-blue.svg)

Building a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. 

## User story

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Table of Contents 

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
 Application uses Jest for running the unit tests nad Inquirer fir collecting input from the user. The application is invoked by using the following command - node index.js

  A user can fork the repo from GitHub and also needs to install Node.js in the local machine. 

  ## Usage

  * Uses the [Inquirer package](https://www.npmjs.com/package/inquirer).
  * Uses the [Jest package](https://www.npmjs.com/package/jest) for a suite of unit tests.

  ## Contribution

  Please follow the fork and pull Git workflow. 

  ## Tests
  npm

  ## Questions
  Feel free to contact on any questions related with this repo at dr.aryakris@outlook.com

