#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res, rej) => {
        setTimeout(res, 3000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow("\n    <<< Developed by Suleman Ali >>> ");
    await sleep();
    rainbowTitle.stop();
    console.log(chalk.yellow(`\n      WELCOME TO NUMBER GUESSING GAME`));
}
// welcome();
let playerLife = 3;
async function askQuestion() {
    let numGenerate = Math.floor(Math.random() * 10 + 1);
    do {
        playerLife--;
        console.log(chalk.green(`Player Life left ${playerLife}`));
        var ques = await inquirer
            .prompt([
            {
                type: "number",
                name: "usr_num",
                message: (chalk.rgb(250, 129, 115)("Select any number between 1 - 10: ")),
            }
        ]);
        // console.log(ques);
        if (ques.usr_num === numGenerate) {
            console.log(chalk.cyanBright(`HURRay! You guessed the right number`));
        }
        else if (ques.usr_num < numGenerate) {
            console.log(chalk.blackBright(`Your number ${ques.usr_num} is less than guess number`));
        }
        else if (ques.usr_num > numGenerate) {
            console.log(chalk.blue(`Your number ${ques.usr_num} is greater than guess number`));
        }
    } while (playerLife > 0 && numGenerate !== ques.usr_name);
    if (playerLife == 0 && numGenerate !== ques.usr_name) {
        console.log(chalk.red(`      GAME OVER`));
    }
}
// askQuestion();
async function startAgain() {
    do {
        console.clear();
        await welcome();
        playerLife = 3;
        await askQuestion();
        var restart = await inquirer.prompt([
            {
                type: "input",
                name: "start_again",
                message: (chalk.bgBlueBright("Do You want to restart the Game? Press Y or N: "))
            }
        ]);
    } while (restart.start_again === 'y' || restart.start_again === 'Y' || restart.start_again === 'yes' || restart.start_again === 'Yes' || restart.start_again === 'YES');
}
startAgain();
