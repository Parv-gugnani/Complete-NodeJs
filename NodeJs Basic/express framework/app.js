// var express = require("express");
// var app = express();
// var path = require("path");

// // basic
// // app.get("/", function (req, res) {
// //   res.send("Hello World!");
// // });

// // app.get("/", function (req, res) {
// //   res.sendFile(path.join(__dirname, "index.html"));
// // });

// var server = app.listen(5000, function () {
//   console.log("Express App running at http://127.0.0.1:5000/");
// });

var express = require("express");
var app = express();
var path = require("path");

var bodyParser = require("body-parser");

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/process_get", function (req, res) {
  // Prepare output in JSON format
  response = {
    first_name: req.query.first_name,
    last_name: req.query.last_name,
  };
  console.log(response);
  res.end(JSON.stringify(response));
});

var server = app.listen(5000, function () {
  console.log("Express App running at http://127.0.0.1:5000/");
});
