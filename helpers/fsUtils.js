const fs = require('fs');
const util = require('util');

// Promise version of fs.readFile
const readFromFile = util.promisify(fs.readFile);
// /**
//  *  Function to write data to the JSON file given a destination and some content
//  *  @param {string} destination The file you want to write to.
//  *  @param {object} content The content you want to write to the file.
//  *  @returns {void} Nothing
//  */
const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${destination}`)
  );
// /**
//  *  Function to read data from a given a file and append some content
//  *  @param {object} content The content you want to append to the file.
//  *  @param {string} file The path to the file you want to save to.
//  *  @returns {void} Nothing
//  */
const readAndAppend = (content, file) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      parsedData.push(content);
      writeToFile(file, parsedData);
    }
  });
};

// /**
// * Function to remove an object by id
// * @param {id} content The I'd of the object/item you want to delete
// * @param {string} file The path to the file you want to save to.
// * @returns {void} Nothing
// */
// const deleteById = (id, file) => {
//   fs.readFile(file, 'utf8', (err, data) => {
//     if (err) {
//       console.error(err);
//     } else {
//       const parsedData = JSON.parse(data);
      
//       parsedData = parsedData.filter(function( obj ) {
//           return obj.id !== id;
//       });
      
//       writeToFile(file, parsedData);
//     }
//   });
// };

<<<<<<< HEAD
module.exports = { readFromFile, writeToFile, readAndAppend };
=======
module.exports = { readFromFile, writeToFile, readAndAppend, deleteById };
>>>>>>> 7527538dd8eb8a6d9f48e60e0ecd49e7f05255c2
