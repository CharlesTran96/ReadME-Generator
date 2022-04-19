// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const readme = require('./readme.js');
const fs = require('fs');

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

inquirer.prompt ([
    {
        type: "input", 
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input', 
        message: 'What is the description of your project?',
        name: 'description',
    },
    {
        type: 'list',
        message: 'What license?',
        choice: [
            "MIT",
            "Apache 2.0",
            "GPL 3.0",
            "BSD 2 Clause",
            "BSD 3 Clause",
            "BSD 4 Clause",
        ],
        name: "license",
    },
]).then(function(answers){
    console.log(answers);
    const readmeContent = readme.generateReadme(answers);
    fs.writeFileSync(__dirname + '/readme.md', readmeContent, 'utf-8')
});
