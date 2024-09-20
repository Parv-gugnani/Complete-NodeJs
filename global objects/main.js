var buf = new Buffer(10);

var buf = new Buffer([10, 20, 30, 40, 50]);

var buf = new Buffer("Simple easy learning", "utf-8");

//Console Class
/*
> console.log("Hello World");
Hello World
undefined
> console.error("Some error occurred");
Some error occurred
undefined
> console.warn("This is a warning message!");
This is a warning message!
undefined
*/

//Process Object
const args = process.argv;

console.log(args);

const name = args[2];

console.log("Hello,", name);
console.log(__filename);
