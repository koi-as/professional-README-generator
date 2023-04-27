// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none') {
    return ``
  } else {
    return ''
  }
};

function renderLicenseLink(license) {
  if (license !== 'none') {
    return `
![License](#license)
`
  } else {
    return ''
  }
};

function renderLicenseSection(license) {
  if (license !== 'none') {
    return `
## License

This project is licensed under the ${license} license.
`
  } else {
    return ''
  }
};

function generateMarkdown(data) {
  return `
# ${data.title}
${renderLicenseBadge(data.licensing)}

## Description

${data.description}
  
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Contribution](#contribute)
- [Testing](#tests)
- [Questions](#questions)
- ${renderLicenseLink(data.licensing)}

## Installation

${data.installation}

## Usage

${data.usage}

## Credits



## How to Contribute

${data.contribution}

## Tests

${data.testing}

## Questions

Follow me at ${data.username} on GitHub! </br>
If you have questions, reach me at ${data.email}!

${renderLicenseSection(data.licensing)}
`;
};

module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
  generateMarkdown
}
