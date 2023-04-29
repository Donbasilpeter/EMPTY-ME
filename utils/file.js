const fs = require('fs');

function listFiles() {
    console.log("helllo")
  const currentDirectory = process.cwd();
  console.log(`Current directory: ${currentDirectory}`);

  fs.readdir(currentDirectory, (err, files) => {
    if (err) {
      console.error("Error getting all files");
      return;
    }
    console.log(`Files in ${currentDirectory}:`);
    files.forEach(file => {
      console.log(file);
    });
  });
}

module.exports = {
  listFiles
};