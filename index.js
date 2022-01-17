//create individual functions - 5 atleast to iteratively call next thing to happen

const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require("./lib/Employee");

//Ask them for manager info

const employees = [];
const exitLoop = true;

//prompt the user for the data for Manager
init();

function init(){
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name'
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email'
        },
        {
            type: 'input',
            message: 'What is your id?',
            name: 'id'
        },
        {
            type: 'input',
            message: 'What is your office number?',
            name: 'officeNumber'
        },
        {
            type: 'list',
            name: 'addMember',
            message: 'What type of team member would you like to add?',
            choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members'],
        }
    ])
        .then(function (data) {
            console.log("Comment1");
            const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
            employees.push(new Employee(manager));
            // employees.push(manager);
            console.log('Manager: ', manager);
            switch (data.addMember) {
                case 'Engineer':
                    engineerQuestions();
                    break;
                case 'Intern':
                    internQuestions();
                    break;
                default:

            }
        });
}

//prompt for engineer questions
const engineerQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name'
        },

        {
            type: 'input',
            message: 'What is your email?',
            name: 'email'
        },
        {
            type: 'input',
            message: 'What is your id?',
            name: 'id'
        },
        {
            type: 'input',
            message: 'What is your githubUsername?',
            name: 'gitHub'
        },
        {
            type: 'list',
            name: 'addMember',
            message: 'What type of team member would you like to add?',
            choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members'],
        }
    ])
        .then(function (engineerData) {
            console.log("engineer:", engineerData);
            const engineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.gitHub);
            employees.push(new Employee(engineer));
            switch (engineerData.addMember) {
                case 'Engineer':
                    engineerQuestions();
                    break;
                case 'Intern':
                    internQuestions();
                    break;
                default:
                    employees.forEach(function (arrayItem) {
                        console.log(arrayItem);
                    });
            }
        });
        return;
}

//prompt for Intern 
const internQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name'
        },

        {
            type: 'input',
            message: 'What is your email?',
            name: 'email'
        },
        {
            type: 'input',
            message: 'What is your id?',
            name: 'id'
        },
        {
            type: 'input',
            message: 'What is your schoolName?',
            name: 'school'
        },
        {
            type: 'list',
            name: 'addMember',
            message: 'What type of team member would you like to add?',
            choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members'],
        }
    ])
        .then(function (internData) {            
            const intern = new Intern(internData.name, internData.id, internData.email, internData.school);
            const employee = new Employee(intern);
            employees.push(new Employee(intern));
            console.log("intern:", employee);
            switch (internData.addMember) {
                case 'Engineer':
                    engineerQuestions();
                    break;
                case 'Intern':
                    internQuestions();
                    break;
                default:
                    employees.forEach(function (arrayItem) {
                        console.log(arrayItem);
                    });
            }
        });
}

// Add employee, and intern, Be done
//If they want to be done, use all of the collected employee data to build an HTML

