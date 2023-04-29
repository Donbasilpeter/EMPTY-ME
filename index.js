#! /usr/bin/env node


const fs = require('fs');

const currentDirectory = process.cwd();
console.log(`Current directory: ${currentDirectory}`);

fs.readdir(currentDirectory, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(`Files in ${currentDirectory}:`);
  files.forEach(file => {
    console.log(file);
  });
});