var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "mydb",
});

var qry = `CREATE TABLE IF NOT EXISTS employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    age INT,
    salary FLOAT
 );`;

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  con.query(qry, function (err, result) {
    if (err) throw err;
    console.log("Created Table Sucessfully!!");
  });

  con.query("SHOW TABLES;", function (err, result) {
    if (err) throw err;
    console.log("Showing Tables\n");
    for (var i = 0; i < result.length; i++) {
      console.log(JSON.stringify(result[i]));
    }
  });

  con.query("DESC employee;", function (err, result) {
    if (err) throw err;
    console.log(JSON.stringify(result));
  });

  con.end();
});
