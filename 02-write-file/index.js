const fs = require('fs');
const path = require('path');
const pathTextFile = path.join(__dirname, 'text.txt');
const newText = fs.createWriteStream(pathTextFile);
const { stdout, stdin } = require('process');

stdout.write('Hi! Write your text:\n');
stdin.on('data', (text) => {
  if (text.toString().trim() === 'exit') {
    stdout.write('You exit , Goodbye');
    process.exit();
  } else {
    newText.write(text);
  }
});

process.on('SIGINT', ()=> {
    stdout.write('You exit , Goodbye');
    process.exit()});