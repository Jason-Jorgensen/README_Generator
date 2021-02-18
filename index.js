const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user
inquirer
    .prompt([
        {
            type: 'input' ,
            name:'userName',
            message:'What is your GitHub username?',
            default: 'Jason-Jorgensen',
        },
        {
            type: 'input' ,
            name:'emailAddress',
            message:'What is your Email Address?',
            default: 'jasoncjorgensen@gmail.com',
        },
        {
            type: 'input' ,
            name:'projectName',
            message:"What is your project's name?",
        },
        {
            type: 'input' ,
            name:'projectDescription',
            message:'Please write a short description of your project: ',
        },
        {
            type: 'input' ,
            name:'projectLink',
            message:'URL link of your project: ',
        },
        {
            type: 'list' ,
            name:'licenseType',
            message:'What kind of license should your project have?',
            choices: ["MIT", "Apache", "Eclipse", "Mozilla", "Unlicense"],
        },
        {
            type: 'input' ,
            name:'runInstall',
            message:'What command should be run to install dependencies?',
            default: 'npm i',
        },
        {
            type: 'input' ,
            name:'runTest',
            message:'What command should be run to run tests?',
            default: 'npm test',
        },
        {
            type: 'input' ,
            name:'projectUsage',
            message:'Please write the project usage: ',
        },
        {
            type: 'input' ,
            name:'contributing',
            message:'What does the user need to know about contributing to the repo?',
        },
    ]).then((data) =>{
        console.log(data);
        console.log("......Generating README.md")
        const makeReadMe = generateMarkdown(data);
        fs.writeFileSync("README.md",makeReadMe)
    })


