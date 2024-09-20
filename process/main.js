process.on("beforeExit", (code) => {
  console.log("A beforeExit event occured with code: ", code);
});

process.on("exit", (code) => {
  console.log("Process exit event with code: ", code);
});

console.log("This message is displayed first.");

process.on("exit", function (code) {
  // Following code will never execute.
  setTimeout(function () {
    console.log("This will not run");
  }, 0);

  console.log("About to exit with code:", code);
});
console.log("Program Ended");

console.log("---------------------------");

console.log(`Starting directory: ${process.cwd()}`);
try {
  process.chdir("NewNodeApp");
  console.log(`New directory: ${process.cwd()}`);
} catch (err) {
  console.error(`chdir: ${err}`);
}

const { pid } = require("node:process");

console.log(`This process is pid ${pid}`);
