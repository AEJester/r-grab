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
    console.log(chalk.bgRed("Please note that we are not responsible for stolen copyright material!"))
    console.log(chalk.blue("Downloading JSON file..."))
    request(url+".json", async (err, res, bdy) => {
        var data = JSON.parse(bdy);
        console.log(chalk.green("Done!"))
        console.log(chalk.yellow("Below is the link that you can use to download the video.\n"))
        console.log(data[0].data.children[0].data.secure_media.reddit_video.fallback_url)
    })
})

program.parse(process.argv)
