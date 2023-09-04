#!/usr/bin/env node
import boxen from 'boxen';
import chalk from 'chalk';
import ora from 'ora';
import open from 'open';
import inquirer from 'inquirer'
import clear from 'clear';
clear();

const intoData = {
    name: chalk.bold.cyanBright("Khairul Hasan"),
    handle: chalk.white("@khairul111010"),
    work: `${chalk.white("Frontend Engineer")} at ${chalk
        .hex("#3E66FF")
        .bold("Anchorblock Technology")}`,
    github: chalk.gray("https://github.com/") + chalk.white("khairul111010"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.hex('#0077B5').bold("imkhairulhasan"),
    web: chalk.hex('#FFEEBB').bold("https://khairul-hasan.netlify.app/"),
    labelWork: chalk.hex('#3E66FF').bold("       Work:"),
    labelTwitter: chalk.white.bold("    Twitter:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.hex('#0077B5').bold("   LinkedIn:"),
    labelWeb: chalk.hex('#FFEEBB').bold("        Web:"),
}

console.log(boxen([`                     ${intoData.name}`,
``,
`${intoData.labelWork}  ${intoData.work}`,
`${intoData.labelLinkedIn}  ${intoData.linkedin}`,
`${intoData.labelGitHub}  ${intoData.github}`,
`${intoData.labelWeb}  ${intoData.web}`,
].join('\n'), {
    margin: 1,
    float: 'center',
    padding: 3,
    borderStyle: "single",
    borderColor: "cyan"}
    ));

const messages = ['Hi! there,', 'This is Khairul Hasan', `Hope you're doing well`, `I provide High Performance Websites, OpenAI apps, Blockchain services and Minimum Viable Product
for you`, `Let's connect and build something big!`]

// Create an "ora" spinner
const spinner = ora().start();
function displayMessages(index, charIndex) {
  if (index === messages.length) {
    spinner.succeed();
    spinner.stop()
    return
  }

  const message = messages[index];
  if (charIndex === message.length) {
    setTimeout(() => {
      displayMessages(index + 1, 0);
    }, 1000);
    return;
  }

  spinner.text = message.substring(0, charIndex + 1);
  setTimeout(() => {
    displayMessages(index, charIndex + 1);
  }, 50);
}
displayMessages(0, 0);


const prompt = inquirer.createPromptModule();

const questions = [
    {
        type: "list",
        name: "action",
        message: "What you want to do?",
        choices: [
            {
                name: `Send me an ${chalk.red.bold("Email")}?`,
                value: () => {
                    open("mailto:khairul.hasan.dev@gmail.com");
                    console.log("\nDone, see you soon at inbox.\n");
                }
            },
            {
                name: `Download my ${chalk.magentaBright.bold("Resume")}?`,
                value: () => {
                   open('https://resume.showwcase.com/iamkhairulhasan.pdf');
                   console.log(`\n Thanks for downloading \n`);
                }
            },
            {
                name: `Schedule a ${chalk.yellow.bold("Meeting")}?`,
                value: () => {
                    open('https://calendly.com/khairul-hasan-dev/30min');
                    console.log("\n See you at the meeting \n");
                }
            },
            {
                name: "Exit",
                value: () => {
                    console.log("Hasta la vista.\n");
                }
            }
        ]
    }
];


const tip = [ `Tip: Try ${chalk.cyanBright.bold("cmd/ctrl + click")} on the links above`,'',].join("\n"); 
console.log(tip);       
prompt(questions).then(answer => answer.action());






