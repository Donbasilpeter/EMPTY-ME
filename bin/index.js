#! /usr/bin/env node

/**
 * 
 * It is a node cli that displays or deletes every file in in a folder
 *
 * @author Don Basil Peter <https://donbasilpeter.vercel.app>
 */

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
  .alias('l')
  .description('List all files in the current directory')
  .action(listFiles);

program
  .command('delete')
  .alias('d')
  .description('Delete all files in the current directory')
  .action(deleteFiles);


program.parse();

