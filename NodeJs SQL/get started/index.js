// const mysql = require("mysql2");

// const con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: process.env.MYSQL,
// });

// con.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

//Create Database
var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  con.query("CREATE DATABASE IF NOT EXISTS mydb;", function (err, result) {
    if (err) throw err;
    console.log("Created database successfully");

    con.query("SHOW DATABASES;", function (err, result) {
      if (err) throw err;
      console.log("Showing databases\n");
      for (var i = 0; i < result.length; i++) {
        console.log(JSON.stringify(result[i]));
      }

      // Close the connection
      con.end();
    });
  });
});
