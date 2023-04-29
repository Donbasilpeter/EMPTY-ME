#! /usr/bin/env node

const { program } = require('commander');
const chalk = require('chalk');
const { listFiles } = require('../utils/file');
const packageDetails = require('../package.json');


program
  .version(packageDetails.version)
  .description(packageDetails.description)
  .name(packageDetails.name)
  .addHelpCommand(true)

program
  .command('listfiles')
  .action(listFiles);


program.parse();

