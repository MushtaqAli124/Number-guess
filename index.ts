import inquirer from "inquirer";
import chalk from "chalk";

// to generate a secret number
const secretNumber: number = Math.floor(Math.random() * 2) + 1;

console.log(chalk.bold.underline("I've picked a Number"));

//user input
let userInp = await inquirer.prompt({
    type: 'list',
    name: 'number',
    message: 'Please select a number:',
    choices: ["1", "2", "3", "4", "5"]
});

//converting user input into number

let num1: number = parseInt(userInp.number)


//switch case
switch (true) {
    case num1 === secretNumber:
        console.log(chalk.bold.green("you won"));
        break;
    default:
        console.log(chalk.bold.red("Better luck Next Time"));
}














