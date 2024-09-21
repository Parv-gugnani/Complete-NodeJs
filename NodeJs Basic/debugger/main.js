let marks = [35, 10, 50, 50, 40];
let total = 0;

for (let i = 0; i <= marks.length; i++) {
  total += marks[i];
}

var no = marks.length;
console.log(total / no);

// node inspect main.js
// using 'inspect' as a debugger

/*
1	
c or cont

Continue execution to the next breakpoint or to the end of the program.

2	
n or next

Move to the next line of code.

3	
s or step

Step into a function. By default, we only step through code in the block or scope we’re debugging.

4	
o

Step out of a function. After stepping into a function, the debugger goes back to the main file when the function returns.

5	
pause

Pause the running code.

*/
