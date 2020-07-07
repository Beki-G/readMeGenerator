const inquirer = require('inquirer');
const markdown = require("./utils/generateMarkdown.js"); 
const fs = require('fs');
const axios = require('axios');

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
        message: "What are the contribution guidelines?",
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
        choices: []
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
    fs.writeFile(fileName, data, err =>{
        if(err){
            return console.log(err);
        }
    })
}

async function getLicenses(){
    const licenseArr =[]
    const config = {  
        method: 'get',
        url: 'https://api.github.com/licenses'
    }

    const {data} = await axios(config)
        .catch(err=>{
            console.log(err)
        })


    data.forEach(license =>{
        const{name, spdx_id} = license
        questions[6].choices.push({name});
        licenseArr.push({name, spdx_id})
    })

    return (licenseArr)  
}

async function init() {
    const licenses = await getLicenses();
    
    const response = await inquirer
        .prompt(questions)
        .catch(error=>{
            console.log(error)
        })

    let userLicense = " "
    licenses.forEach(licenseType=>{
        if(response.license === licenseType.name){
            userLicense = licenseType.spdx_id
        }
    })


    const config = {  
        method: 'get',
        url: "https://api.github.com/licenses/"+userLicense
    }

    const {data} = await axios(config)
        .catch(error =>console.log(error))

 
    const readMetxt = markdown(response, data.description);
    writeToFile(`./readmes/${response.title}_README.md`, readMetxt);
}

init();
