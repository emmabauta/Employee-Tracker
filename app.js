const inquirer = require("inquirer");
const logo = require("asciiart-logo");
const cTable = require('console.table');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rootroot',
    database: 'employees'
});


connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});
function init() {
    const logoText = logo({ name: "Em's Employee Manager" }).render();
    console.log(logoText);
    loadMainMenu();
}

function loadMainMenu() {
    inquirer.prompt([
        {
            name: 'choice',
            type: 'list',
            message: "What would you like to do?",
            choices: [
                {
                    name: "Add a department",
                    value: "ADD_DEPARTMENT",
                },

                {
                    name: "Add an employee",
                    value: "ADD_EMPLOYEE",
                },

                {
                    name: "Add a role",
                    value: "ADD_ROLE",
                },

                {
                    name: "View by department",
                    value: "VIEW_DEPARTMENT",
                },

                {
                    name: "View by role",
                    value: "VIEW_ROLE",
                },

                {
                    name: "View employee",
                    value: "VIEW_EMPLOYEE"
                }
            ]
        }
    ]).then(function (choices) {
        console.log(choices);
        handleChoices(choices);
    })
}

function handleChoices(choices) {
    switch (choices.choice) {
        case "VIEW_EMPLOYEE":
            return viewEmployees()
        case "VIEW_DEPARTMENT":
            return viewDepartment()
        case "VIEW_ROLE":
            return viewRole()
        case "ADD_EMPLOYEE":
            return addEmployee()
        case "ADD_DEPARTMENT":
            return addDepartment()
        case "ADD_ROLE":
            return addRole()
        case "exit":
            connection.end();
            break;
    }
}

function viewEmployees() {
    var query = "SELECT * FROM employee";
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res); 
    })
}

fu








init();