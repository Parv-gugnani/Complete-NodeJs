// var fs = require("fs");
// var data = `Tutorials Point is giving self learning content
// to teach the world in simple and easy way!!!!!`;

// // Create a writable stream
// var writerStream = fs.createWriteStream("output.txt");

// // Write the data to stream with encoding to be utf8
// writerStream.write(data, "UTF8");

// // Mark the end of file
// writerStream.end();

// // Handle stream events --> finish, and error
// writerStream.on("finish", function () {
//   console.log("Write completed.");
// });

// writerStream.on("error", function (err) {
//   console.log(err.stack);
// });

// console.log("Program Ended");

//Changing Streamss

var fs = require("fs");
var zlib = require("zlib");

// Compress the file input.txt to input.txt.gz
fs.createReadStream("input.txt")
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream("input.txt.gz"));

console.log("File Compressed.");

var fs = require("fs");
var zlib = require("zlib");

// Decompress the file input.txt.gz to input.txt
fs.createReadStream("input.txt.gz")
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream("input.txt"));

console.log("File Decompressed.");
