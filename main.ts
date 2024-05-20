#! /usr/bin/env node

// word counter

// inquirer
import inquirer from "inquirer";

const ans :{
    sent: string;
} = await inquirer.prompt([
    {
        name: "sent",
        type: "input",
        message: "Enter your sentence to countthe given words:"
    }
])

// output defined
const done = ans.sent.trim().split(" ")

console.log(done)

console.log(`you sentence word count is ${done.length}`)