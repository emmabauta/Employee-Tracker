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

function viewDepartment() {
    var query = "SELECT * FROM department";
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
    })
}

function viewRole() {
    var query = "SELECT * FROM role";
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
    })
}

function addDepartment() {
    inquirer.prompt({
        name: "department_name",
        type: "input",
        message: "What would you like to name the department?"
    })
        .then(function (departmentName) {
            connection.query("INSERT INTO department SET ?", {
                name: departmentName.department_name
            },
                function (err) {
                    if (err) throw err;
                    console.log("A new department has been created.");
                }
            );
        });

}

function addEmployee() {
    inquirer.prompt([
    {
        name: "firstName",
        type: "input",
        message: "What is the new employee's first name?"
    },
    {
            name: "lastName",
            type: "input",
            message: "What is the new employee's last name?" 
    },
    {   
        name: "ID", 
        type: "input",
        message: "Input new employee's role id."    
    }])
        .then(function (newEmployee) {
            console.log(newEmployee);
            connection.query("INSERT INTO employee SET ?", {
                first_name: newEmployee.firstName,
                last_name: newEmployee.lastName,
                role_id: newEmployee.ID
            },
                function (err) {
                    if (err) throw err;
                    console.log("A new employee has been added.");
                }
            );
        });
}

function addRole() {
    inquirer.prompt([
    {
        name: "new_role",
        type: "input",
        message: "What would you like to call the new role?"
    },
    {
            name: "salary",
            type: "input",
            message: "What is the annual salary for this role?" 
    },
    {   
        name: "ID", 
        type: "input",
        message: "Input new id for role."    
    }])
        .then(function (newRole) {
            console.log(newRole);
            connection.query("INSERT INTO role SET ?", {
                title: newRole.new_role,
                salary: newRole.salary,
                department_id: newRole.ID
            },
                function (err) {
                    if (err) throw err;
                    console.log("A new role has been added.");
                }
            );
        });
}










init();