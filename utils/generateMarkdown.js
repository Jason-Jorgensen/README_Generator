// function to generate markdown for README
function generateMarkdown(data) {
  let badge = "";

  switch (data.licenseType) {
    case "MIT":
      badge = "[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)";
      break;

    case "Apache":
      badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;

    case "Eclipse":
      badge = "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
      break;

    case "Mozilla":
      badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      break;

    case "Unlicense":
      badge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
      break;
  }




  return `
  # ${data.projectName} ${badge}

  
  ## Description
  ${data.projectDescription} \n
  [Project Link](${data.projectLink})

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation

  ${data.runInstall}

  ## Usage

  ${data.projectUsage}

  ## License

  This project is licensed under the ${data.licenseType} license.

  ## Contributing
  ${data.contributing}

  ## Tests

  To run tests, run the following command: \n
  ${data.runTest}

  ## Questions
  If you have any questions please email me at ${data.emailAddress}.\n
  Also, please see my [GitHub](https://github.com/${data.userName})
`;
}

module.exports = generateMarkdown;