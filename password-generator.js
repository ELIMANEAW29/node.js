const passwordGenerator = require('generate-password');

function generateRandomPassword() {
  return passwordGenerator.generate({
    length: 16,
    numbers: true,
    symbols: true,
    uppercase: true,
    lowercase: true,
    strict: true,
  });
}

console.log(generateRandomPassword());