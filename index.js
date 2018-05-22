#!/usr/bin/env node
const program = require("commander");
const request = require("request");
const chalk = require("chalk")
const v_number = require("./package.json").version;
const desc = require("./package.json").description;
program
.version(v_number)
.description(desc)
.arguments("<url>")
.action((url) => {
    request(url+".json", async (err, res, bdy) => {
        var data = JSON.parse(bdy);
        console.log(chalk.bgRed("Please note that we are not responsible for stolen copyright material!"))
        console.log(chalk.blue("Downloading JSON file..."))
        await sleep(2000);
        console.log(chalk.green("Done!"))
        console.log(chalk.blue("Creating link..."))
        await sleep(1500)
        console.log(chalk.green("Done!"))
        console.log(chalk.yellow("Below is the link that you can download the video.\n"))
        console.log(data[0].data.children[0].data.secure_media.reddit_video.fallback_url)
    })
})

program.parse(process.argv)

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }