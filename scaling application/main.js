const fs = require("fs");
const child_process = require("child_process");

for (var i = 0; i < 3; i++) {
  var childprocess = child_process.exec(
    "node child.js " + i,
    function (error, stdout, stderr) {
      if (error) {
        console.log(error.stack);
        console.log("Error code: " + error.code);
        console.log("Signal received: " + error.signal);
      }
      console.log("stdout: " + stdout);
      console.log("stderr: " + stderr);
    }
  );

  childprocess.on("exit", function (code) {
    console.log("Child process exited with exit code " + code);
  });
}

/*
The spawn() Method
child_process.spawn method launches a new process with a given command.

child_process.spawn(command[, args][, options])

*/

/*

The fork() Method
child_process.fork method is a special case of spawn() to create Node processes. It has the following syntax −

child_process.fork(modulePath[, args][, options])
*/
