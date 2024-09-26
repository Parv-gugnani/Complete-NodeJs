var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "mydb",
});

var qry = `SELECT * FROM employee ORDER BY name DESC;`;

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  con.query(qry, function (err, results) {
    if (err) throw err;
    console.log(results);
  });

  con.end();
});
