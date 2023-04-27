const fs = require('fs');
const inquirer = require('inquirer');

const generateMD = require('./utils/generateMarkdown.js')

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('README Generated!')
    })
};

function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'What do you want to title your project?'
            },
            {
                type: 'input',
                name: 'description',
                message: 'Provide a short description of what your project is about:'
            },
            {
                type: 'input',
                name: 'installation',
                message: 'Provide installation instructions for your project:'
            },
            {
                type: 'input',
                name: 'usage',
                message: 'Provide descriptive usage information for your project:'
            },
            {
                type: 'input',
                name: 'contribution',
                message: 'Provide descriptive contribution guidelines for your project:'
            },
            {
                type: 'input',
                name: 'testing',
                message: 'Provide descriptive testing instructions for your project:'
            },
            {
                type: 'input',
                name: 'username',
                message: 'What is your github username?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the email you want people to send you questions to?'
            },
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
            },
        ])
        .then((responses) => {
            writeToFile('README.md', generateMD({...responses}))
        });
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