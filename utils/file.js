const fs = require('fs');
const chalk = require('chalk');

function listFiles() {
  const currentDirectory = process.cwd();
  fs.readdir(currentDirectory, (err, files) => {
    if (err) {
      console.error("Error getting all files");
      return;
    }
    console.log(chalk.green('Files in current directory:'));
    const columnWidth = Math.floor((process.stdout.columns - 4) / 4);
    let fileColumns = [];
    files.forEach(file => {
      if (file.length > columnWidth) {
        file = file.substring(0, columnWidth - 3) + '...';
      }
      fileColumns.push(chalk.blue(file.padEnd(columnWidth)));
      if (fileColumns.length === 4) {
        console.log(fileColumns.join('   '));
        fileColumns = [];
      }
    });
    if (fileColumns.length > 0) {
      console.log(fileColumns.join('   '));
    }
  });
}


module.exports = {
  listFiles
};