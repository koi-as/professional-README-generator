// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${responses.description}
  
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Contribution](#contribute)
- [Testing](#tests)
- [Questions](#questions)
- [License](#license)

## Installation

${responses.installation}

## Usage

${responses.usage}

## Credits



## How to Contribute

${responses.contribution}

## Tests

${responses.testing}

## Questions

Follow me at ${responses.username} on GitHub! </br>
If you have questions, reach me at ${responses.email}!
`;
}

module.exports = generateMarkdown;
