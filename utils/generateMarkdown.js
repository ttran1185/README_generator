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
  ${answers.Questions}


  ## Questions
 
  Github:(https://github.com/ttran1185)
  Email:(https://github.com/ttran1185)

`;
}

module.exports = generateMarkdown;
