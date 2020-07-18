// array of questions for user
const questions = [

    {
        type: "input",
        message: "What is your project title?",
        name: "Title"

    },

    {
        type: "iput",
        message: "Describe your project",
        name: "Description"
    },

      {
        type: "input",
        message: "Provide instructions for use",
        name: "Table of Contents"

    },

    {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "Installation"
    },

    {
        type: "input",
        message: "Provide instructions for use",
        name: "Usage"

    },

    {
        type: "input",
        message: "Select License",
        name: "License",
        choices: [
            "MIT",
            "GVL-GPL 3.0",
            "APACHE 2.0",
            "BSD 3",
            "None"
        ]

    },

    {
        type: "input",
        message: "How do you test your project?",
        name: "Test"
    },

    {
        type: "input",
        message: "Any contributors?",
        name: "Contributors"
    },
  
    {

        type: "input",
        message: "If you have further questions, please contact me.",
        name: "Questions"

    }


];

// function to write README file
function writeToFile(fileName, data) {
    writeToFile(fileName, data, err => {
        if (err) {
            throw err;
        }
    });
}

// function to initialize program
function init() {
    prompt(questions).then(answers => {

        const repsonse = generateMarkdown(answers);

        writeToFile("README.md", repsonse);
    })
}

// function call to initialize program
init();
