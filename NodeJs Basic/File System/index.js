// var fs = require("fs")

// fs.writeFileSync(file, data[, options]);

// fs.writeFileSync(file, data[, options]);

const fs = require("fs");
var text = `Tutorials Point is giving self learning content
to teach the world in simple and easy way!!!!!
`;

console.log("Writing synchronously");
fs.writeFileSync("input.txt", text);

console.log("Writing asynchronously");
fs.writeFile("input.txt", text, function (err) {
  if (err) console.log(err);
  else console.log("Write operation complete.");
});
