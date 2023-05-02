// require modules 
const fs = require('fs'); 
const inquirer = require('inquirer'); 

// link to generateMarkdown
const generateReadMe = require('./utils/generateMarkdown.js');

// inquirer for questions
const questions = () => {
    // using inquirer to prompt questions to user 
    return inquirer.prompt([
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a username');
                return false; 
            }
        } 
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your project name?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your project name!');
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter an email address');
                return false; 
            }
        }

    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project.',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a description');
                return false; 
            }
        }
    }, 
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license does your project have?',
        choices: ['MIT', 'GNU'],
        default: ["MIT"],
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please choose a license');
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'install',
        message: 'What steps are required to install the project?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter the steps required');
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How is the usage of this application?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a usage description');
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'What does the user need to know about contributing to the repo?'
    },
    {
        type: 'input',
        name: 'test', 
        message: 'What command should be run to run tests?',
        default: 'npm test'
    }
]);
};

//function to write README file using writeFile
const writeFile = data => {
    fs.writeFile('README.md', data, err => {
        // if error
        if (err) {
            console.log(err);
            return;
        // if successful and README generated
        } else {
            console.log("Your README has been successfully created!")
        }
    })
}; 

// function call to initialize program
questions()
// get user answers and include into generateMarkdown page
.then(answers => {
    return generateReadMe(answers);
})
// using data to display on page 
.then(data => {
    return writeFile(data);
})
// catching errors 
.catch(err => {
    console.log(err)
})
