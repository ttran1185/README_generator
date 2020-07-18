// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


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
  ${data.Description}
  ## Installation instructions
  ${data.Installation}
  ## Usage information
  ${data.Usage}
  ## License
  ${data.License}
  ## Test
  ${data.Test}
  ## Contributors
  ${data.Contributors}
  ## Questions
  ${data.questions}


  ## Questions
  Contact me:
  Github:[${data.Username}](https://github.com/ttran1185)
  Email:[${data.Email}](https://github.com/ttran1185)

`;
}

module.exports = generateMarkdown;
