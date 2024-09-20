var express = require("express");

var app = express();

var fs = require("fs");

app.get("/", function (req, res) {
  fs.readFile(__dirname + "/" + "users.json", "utf8", function (err, data) {
    res.end(data);
  });
});

var server = app.listen(5000, function () {
  console.log("Express App running at localhost khud dhund le 😡");
});
