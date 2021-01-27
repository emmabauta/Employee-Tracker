const inquirer = require("inquirer");
const logo = require("asciiart-logo");
const db = require('./db');
require("console.table");

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
                    name: "View all employees",
                    value: "VIEW_EMPLOYEES"
                }

            ]
        }
    ]).then(function (choices) {
        console.log(choices);
        handleChoices(choices);
    })
}

function handleChoices(choices) {
    switch (choices.choices) {
        case "VIEW_EMPLOYEES":
            return viewEmployees()
    }
} 











init()