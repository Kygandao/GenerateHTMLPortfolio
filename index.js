const fs = require('fs');

const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'myname',
        },
        {
            type: 'input',
            message: 'Where are you located?',
            name: 'location',
        },
        {
            type: 'input',
            message: 'Tell us a little about yourself',
            name: 'bio',
        },
        {
            type: 'input',
            message: 'What is your LinkedIn URL?',
            name: 'linkedin',
        },
        {
            type: 'input',
            message: 'What is your GitHub URL?',
            name: 'github',
        },
    ])
    .then((response) =>
        console.log('Thank you for your information!')
    );

    fs.appendFile('note.txt', `${myname}`, (err) => {
        console.log(err ? `the error is ${err}` : 'added your name')
      })

