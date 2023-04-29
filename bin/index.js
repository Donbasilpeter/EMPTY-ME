#! /usr/bin/env node

const { program } = require('commander');
const { listFiles,deleteFiles } = require('../utils/file');
const packageDetails = require('../package.json');


program
  .version(packageDetails.version)
  .description(packageDetails.description)
  .name(packageDetails.name)
  .addHelpCommand(true)

program
  .command('listfiles')
  .description('List all files in the current directory')
  .action(listFiles);

program
  .command('go')
  .description('Delete all files in the current directory')
  .action(deleteFiles);


program.parse();

