const fs = require('node:fs');
const path = require('node:path');

const filePath = path.join(__dirname, 'hello.txt');

fs.readFile(filePath, 'utf8', (error, data) => {
  if (error) {
    console.error('Unable to read hello.txt:', error.message);
    process.exitCode = 1;
    return;
  }

  console.log(data);
});