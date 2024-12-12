#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//to generate a secret number
const secretNumber = Math.floor(Math.random() * 10);
console.log(chalk.bgGreenBright.redBright("No Guessing Game:"));
// console.log(secretNumber);
// user input
let userInput = await inquirer.prompt({
    type: "input",
    name: "num",
    message: "please Enter the number between 1-10 :"
});
// converting user input into number
let num1 = parseInt(userInput.num);
// switch case
switch (true) {
    case num1 === secretNumber:
        console.log(chalk.bold.green("you won"));
        break;
    default:
        console.log(chalk.bold.red("better luck next time"));
}
