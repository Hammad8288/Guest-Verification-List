#! /usr/bin/env node 
import inquirer from "inquirer";
console.log("\n Welcome to Hammad Party!");
console.log("\n Guest Verification Center! \n");
let invitedGuestName = ["hammad", "amir", "mubashir", "hamzair", "arasalan", "umair", "yaseen", "david",];
let condition = true;
while (condition) {
    let userInput = await inquirer.prompt([{
            type: "input",
            name: "guestName",
            message: "Please enter your name",
        }]);
    let confirmguestName = userInput.guestName;
    let lowerCaseName = confirmguestName.toLowerCase();
    if (invitedGuestName.includes(lowerCaseName)) {
        console.log(`Welcome Mr.${lowerCaseName} To Our Party!`);
        condition = false;
    }
    else {
        console.log(`Sorry Mr.${lowerCaseName} You are not invited to Our Party!`);
        condition = false;
    }
    let askAgain = await inquirer.prompt([
        {
            type: "confirm",
            name: "askAgain",
            message: "Do you want to check another name ?",
            default: false,
        }
    ]);
    if (askAgain.askAgain === true) {
        condition = true;
    }
    else {
        condition = false;
    }
}
;
