const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkDown = require("./utils/generateMarkdown");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

const questions = [
    "What is the project title?",
    "Describe your project.",
    "What are the steps requried to install the project",
    "What is it used for?",
    "Select a License",
    "How do you test your project?",
    "Any contributors?",
    "Please enter your email to contact me."


]

// array of questions for user
const questionsPrompt = () => {
    return inquirer.prompt([ 
    {
        type: "input",
        message: questions[0],
        name: "Title"

    },

    {
        type: "iput",
        message: questions[1],
        name: "Description"
    },


    {
        type: "input",
        message: questions[2],
        name: "Installation"
    },

    {
        type: "input",
        message: questions[3],
        name: "Usage"

    },

    {
        type: "input",
        message: questions[4],
        name: "License",
        choices: ["BSD 3-Clause", "MIT"],

    },

    {
        type: "input",
        message: questions[5],
        name: "Test"
    },

    {
        type: "input",
        message: questions[6],
        name: "Contributors"
    },
  
    {

        type: "input",
        message: questions[7],
        name: "Questions"

    }


    ]);
};

// function to write README file
async function init() {
       console.log("YAY! It worked");
    try {
      const answers = await questionsPrompt();
      
      const readme = generateMarkDown(answers);
     
      await writeFileAsync("README.md", readme);
      console.log("README Created");
    } catch (err) {
    console.log(err);
    }
  }
// function call to initialize program
init();
