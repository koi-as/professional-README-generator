// This renders a badge onto the README depending on what license a user chose
function renderLicenseBadge(license) {
  if (license !== 'None') {
    if (license === 'Apache License 2.0') {
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)`
    } else if (license === 'GNU General Public License v3.0') {
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    } else if (license === 'MIT License') {
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    } else if (license === 'BSD 2-Clause "Simplified" License') {
      return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
    } else if (license === 'BSD 3-Clause "New" or "Revised" License') {
      return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-orange.svg)](https://opensource.org/licenses/BSD-3-Clause)`
    } else if (license === 'Boost Software License 2.0') {
      return `[![License](https://img.shields.io/badge/License-Boost_2.0-lightblue.svg)](https://www.boost.org/LICENSE_2_0.txt)`
    } else if (license === 'Creative Commons Zero v1.0 Universal') {
      return `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`
    } else if (license === 'Eclipse Public License 2.0') {
      return `[![License](https://img.shields.io/badge/License-EPL_2.0-red.svg)](https://opensource.org/licenses/EPL-2.0)`
    } else if (license === 'GNU Affero General Public License v3.0') {
      return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
    } else if (license === 'GNU General Public License v2.0') {
      return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
    } else if (license === 'GNU Lesser General Public License v2.1') {
      return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v2.1-blue.svg)](https://www.gnu.org/licenses/lgpl-2.1)`
    } else if (license === 'Mozilla Public License 2.0') {
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    } else if (license === 'The Unlicense') {
      return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
    }
  } else {
    return ''
  }
};

// if a user chose a license, a link will be created in the table of contents
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `
- [License](#license)
`
  } else {
    return ''
  }
};

// this creates the section that provides information about the license
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `
## License

This project is licensed under the ${license} license.
`
  } else {
    return ''
  }
};

// this uses the skeleton of a README and inputs user data to then write it later
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
${renderLicenseLink(data.licensing)}

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

// this is exporting the function generateMarkdown for us to use in the index.js
module.exports = generateMarkdown
