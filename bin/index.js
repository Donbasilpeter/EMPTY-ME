#! /usr/bin/env node

const { program } = require('commander');
const { listFiles } = require('../utils/file');


program
  .command('listfiles')
  .description('List all files in the current directory')
  .action(listFiles);

program.parse();