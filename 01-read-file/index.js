const path = require('path');
const fs = require('fs');
const pathTxtFile = path.join(__dirname, 'text.txt');
const readableStream = fs.createReadStream(pathTxtFile, "utf-8");
readableStream.on("data", (chunk) => console.log(chunk));