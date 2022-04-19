function generateReadme(answers){
    return `
    # ${answers.title}

    ![License](https://img.shields.io/badge/license-${license}-green)

    ## Description
    
    ${answers.description}
    
    ## Table of Contents
    
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    
    ## Installation

    ${answers.installation}
    
    ## License
    
    This Project is licensed under ${answers.license} `
};

module.exports = {
    generateReadme
};