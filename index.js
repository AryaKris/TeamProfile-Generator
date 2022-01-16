//create individual functions - 5 atleast to iteratively call next thing to happen

const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require ('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


//Ask them for manager info

const employees = [];
const exitLoop = true;

//prompt the user for the data for Manager

inquirer.prompt ([
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
.then (function(data){
    console.log(data);
    const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
    employees.push(manager);
    console.log('Manager: ',manager);
    switch(data.addMember){
        case 'Engineer':
            engineerQuestions();
            break;
            case 'Intern':
                internQuestions();
                break;
                default:

    }

    //call next prompt function that lets you pick next employee to add using more enquire prompts  
//     console.log("exitLoop: ", exitLoop);
//    while (exitLoop){
//         inquirer.prompt([
//             {
//                 type: 'list',
//                 name: 'nextEmployee',
//                 message: 'Whom should be added next?',
//                 choices: ['Engineer', 'Intern','exitLoop'],
//             }
//         ])
//             .then((answers) => {
//                 if (answers.nextEmployee != 'exitLoop') {
//                     console.info('Answer:', answers.nextEmployee);
//                 }
//                 else {
//                     return;
//                 }                
//             });
//     }    
});


// nextEmployee();






 //THEN create and store an object for the manager 

 //THEN `ask what they want to do next'
 

//Ask them for engineer info

// Ask them for intern info


// Ask them what they would like to do next

 // Add employee, and intern, Be done
//If they want to be done, use all of the collected employee data to build an HTML 



