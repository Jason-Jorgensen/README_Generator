const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

function testReadMe () {
    const data = {
        userName: "User Name",
        emailAddress: "Email@email.com",
        projectName: "README Generator",
        projectDescription: "Will generate a README by taking in the user's input in the terminal",
        projectLink: "Link.com",
        licenseType: "MIT",
        runInstall: "Run npm i for the package.json",
        runTest: "Run node test.js in the terminal",
        projectUsage: "Run node index.js in the terminal",
        contributing: "",
    }

    const newTestReadMe = generateMarkdown(data);

    fs.writeFileSync("README.md",newTestReadMe);
}

testReadMe();