// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
inquirer
    .prompt([
        // Ask user for the title of the project
        {
            type: 'input',
            name: 'title',
            message: 'What do you want to title your project?'
        },
        // A short description
        {
            type: 'input',
            name: 'description',
            message: 'Provide a short description of what your project is about:'
        },
        // Installation Instructions
        {
            type: 'input',
            name: 'installation',
            message: 'Provide instructions on how to use your project:'
        },
        // Detailed usage information
        {
            type: 'input',
            name: 'usage',
            message: 'Provide descriptive usage information for your project:'
        },
        // Contribution guidelines
        {
            type: 'input',
            name: 'contribution',
            message: 'Provide descriptive contribution guidelines for your project:'
        },
        // And testing instructions
        {
            type: 'input',
            name: 'testing',
            message: 'Provide descriptive testing instructions for your project:'
        },
        // Add a list of licensing options to select from
        {
            type: 'list',
            name: 'licensing',
            message: 'Choose a license type for your project from the options listed below:',
            choices: [
                'None',
                'Apache License 2.0',
                'GNU General Public License v3.0',
                'MIT License',
                'BSD 2-Clause "Simplified" License',
                'BSD 3-Clause "New" or "Revised" License',
                'Boost Software License 2.0',
                'Creative Commons Zero v1.0 Universal',
                'Eclipse Public License 2.0',
                'GNU Affero General Public License v3.0',
                'GNU General Public License v2.0',
                'GNU Lesser General Public License v2.1',
                'Mozilla Public License 2.0',
                'The Unlicense'
            ]
        }
    ])
    .then((responses) => {
        console.log(responses);
    });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    /* 
    Set filename to README
    What will data be?
    - Generated sections that include
        - Title
        - Description
        - Table of Contents
        - Installation
        - Usage
        - Credits
        - License
        - Contributing
        - Tests
        - Questions
    - Input user data into the above sections
    */
}

// TODO: Create a function to initialize app
function init() {
    /*
    What does this mean?
    Does this mean when I run a command it starts the process of writing a new file?
    */
}

// Function call to initialize app
init();


















// HIHIHIHIHIHIHIHIHIHIHIHIH These kinda look like bricks
// IHIHIHIHIHIHIHIHIHIHIHIHI 
// HIHIHIHIHIHIHIHIHIHIHIHIH . . .
// IHIHIHIHIHIHIHIHIHIHIHIHI 
// HIHIHIHIHIHIHIHIHIHIHIHIH I'm just a bit distracted ok?
// IHIHIHIHIHIHIHIHIHIHIHIHI 
// HIHIHIHIHIHIHIHIHIHIHIHIH . . .
// IHIHIHIHIHIHIHIHIHIHIHIHI 
// HIHIHIHIHIHIHIHIHIHIHIHIH You don't need to keep reading