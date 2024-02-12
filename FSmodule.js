// //Reading files
 const fs = require('fs');

// // Asynchronous read
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// // Synchronous read
const data = fs.readFileSync('file.txt', 'utf8');
console.log(data);

//Writing files
// Asynchronous write
fs.writeFile('file.txt', 'Hello, world!', (err) => {
  if (err) throw err;
  console.log('Data written to file');
});

// Synchronous write
fs.writeFileSync('file.txt', 'Hello, world!');
console.log('Data written to file');

//file information


fs.stat('file.txt', (err, stats) => {
  if (err) throw err;
  console.log(`File size: ${stats.size} bytes`);
  console.log(`Is directory: ${stats.isDirectory()}`);
});

//Working with directories
// const fs = require('fs');

// Create directory
fs.mkdir('newDir', (err) => {
  if (err) throw err;
  console.log('Directory created');
});

// Read directory
fs.readdir('file', (err, files) => {
  if (err) throw err;
  console.log('Files in directory:', files);
});

//Remove directory
fs.rmdir('newDir', (err) => {
  if (err) throw err;
  console.log('Directory deleted');
});

