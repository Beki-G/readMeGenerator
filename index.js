const inquirer = require('inquirer');
const markdown = require("./utils/generateMarkdown.js") 

const questions = [
    {
        name: "title",
        message: "What is the name of the project?",
        type:"input"   
    },
    {
        name:"description",
        message: "What is the description of the project?",
        type:"input"
    },
    {
        name:"installation",
        message: "What are the installation instructions?",
        type:"input"
    },
    {
        name: "usageInfo",
        message: "Why would you use this?",
        type:"input"
    },
    {
        name: "contribution",
        message: "What are teh contribution guidelines",
        type: "input"
    },
    {
        name: "test",
        message: "What are thes test instructions?",
        type:"input"
    },
    {
        name:"license",
        message: "What type of license do you want to add?",
        type: "list",
        choices: ["Apache License 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-Clause \"Simplified\" license", "BSD 3-Clause \"New\" or \"Revised\" License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 1.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser General Public License v2.1", "Mozilla Public License 2.0", "The Unlicense"]
    },
    {
        name:"githubUsername",
        message: "What is your Github username?",
        type: "input"
    },
    {
        name:"email",
        message: "What email can people reach out to you for addtional questions?",
        type:"input"
    }
];

function writeToFile(fileName, data) {
}

function init() {
    inquirer
        .prompt(questions)
        .then(response=>{
            console.log(response)
            const readMetxt = markdown(response);
            console.log(readMetxt)
        })
        .catch(error=>{
            console.log(error)
        })
    
}

init();
