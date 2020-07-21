// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}


  ## Table of Contents
  *[Title](#title)
  * [Description](#description)
  * [Installation instructions](#installation)
  * [Usage information](#usage)
  * [License](#license)
  * [Test](#test)
  * [Contributors](#contributors)
  * [Questions](#questions)
  
  ## Description
  ${answers.Description}
  ## Installation instructions
  ${answers.Installation}
  ## Usage information
  ${answers.Usage}
  ## License
  ${answers.License}
  ## Test
  ${answers.Test}
  ## Contributors
  ${answers.Contributors}



  ## Questions
  Feel free to reach out for any questions: ${"\n"}
  Github:[${answers.Username}](https://github.com/ttran1185)
  Email:[${answers.Email}](https://github.com/ttran1185)

`;
}

module.exports = generateMarkdown;
