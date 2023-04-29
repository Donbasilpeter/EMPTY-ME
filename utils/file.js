const fs = require("fs");
const chalk = require("chalk");
const del = require("del");
const readline = require('readline');

//function to list all files in the current directory
function listFiles() {
  const currentDirectory = process.cwd();
  fs.readdir(currentDirectory, (err, files) => {
    if (err) {
      console.error("Error getting all files");
      return;
    }
    console.log(chalk.green("\n\nFiles in current directory:"));
    console.log("-".repeat(process.stdout.columns));
    const columnWidth = Math.floor((process.stdout.columns - 4) / 4);
    let fileColumns = [];
    files.forEach((file) => {
      if (file.length > columnWidth) {
        file = file.substring(0, columnWidth - 3) + "...";
      }
      fileColumns.push(chalk.blue(file.padEnd(columnWidth)));
      if (fileColumns.length === 4) {
        console.log(fileColumns.join("   "));
        fileColumns = [];
      }
    });
    if (fileColumns.length > 0) {
      console.log(fileColumns.join("   "));
    }
  });
}

//function to delete all the files in the current directory.
function deleteFiles() {
  const currentDir = process.cwd();
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question(chalk.red(`WARNING: This will delete all files in ${currentDir}. Are you sure you want to proceed? (y/N) `), answer => {
    rl.close();
    if (answer.toLowerCase() === 'y') {
      del(currentDir + '/*')
        .then(deletedFiles => {
          console.log('Deleted files:\n', deletedFiles.join('\n'));
        })
        .catch(err => {
          console.error(err);
        });
    } else {
      console.log('Operation cancelled.');
    }
  });
}

module.exports = {
  listFiles,
  deleteFiles,
};
