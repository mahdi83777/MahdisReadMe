// function to generate markdown for README file
const generateMarkdown = data => {
    return `# ${data.title}
    ![Github licence](http://img.shields.io/badge/license-${data.license}-blue.svg)
  
    ## Description 
    ${data.description}
  
    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Tests](#tests)
    * [Contributing](#contributing)
    * [Questions](#questions)
    
    ## Installation 
    ${data.install}
  
    ## Usage 
    ${data.usage}
  
    ## License 
    This project is license under ${data.license}
  
    ## Tests
    ${data.test}

    ## Contributing 
    ${data.contributors}
  
    ## Questions
    If you have any questions about this projects, please contact me directly at ${data.email}. You can view more of my projects at https://github.com/${data.github}.
  `;
  }
  
  
  //import Markdown in index 
  module.exports = generateMarkdown;
  