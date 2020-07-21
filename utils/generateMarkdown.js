// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.Title}


  ## Table of Contents
  * [Title](#title)
  * [Description](#description)
  * [Installation instructions](#installation)
  * [Usage information](#usage)
  * [License](#license)
  * [Test](#test)
  * [Contributors](#contributors)
  * [Questions](#questions)
  
  ## Title
  ${answers.Title}
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
  ${answers.Questions}



`;
}

module.exports = generateMarkdown;
