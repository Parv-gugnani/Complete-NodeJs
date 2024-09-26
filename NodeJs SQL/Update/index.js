var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "pass",
  database: "mydb",
});

// var qry = "UPDATE employee SET salary=40000 WHERE name=?;";

var nm = "Anil";

// con.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
//   con.query(qry, nm, function (err) {
//     if (err) throw err;
//     console.log("Records updated successfully");
//     var qry = `SELECT name,salary FROM employee WHERE name=?;`;
//     con.query(qry, nm, function (err, results) {
//       if (err) throw err;
//       console.log(results);
//     });
//   });
// });

//salary
var qry = `
   UPDATE employees
      INNER JOIN
   merits ON employees.performance = merits.performance 
SET 
   salary = salary + salary * percentage;
   `;
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  con.query(qry, nm, function (err) {
    if (err) throw err;
    con.query(qry, nm, function (err, results) {
      if (err) throw err;
      console.log(results);
    });
  });
});
