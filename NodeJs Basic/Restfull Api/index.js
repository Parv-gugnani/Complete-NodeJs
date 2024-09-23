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

app.delete("/:id", function (req, res) {
  fs.readFile(__dirname + "/" + "users.json", "utf8", function (err, data) {
    data = JSON.parse(data);
    var id = "user" + req.params.id;
    var user = data[id];
    delete data["user" + req.params.id];
    res.end(JSON.stringify(data));
  });
});

app.get("/:id", function (req, res) {
  fs.readFile(__dirname + "/" + "users.json", "utf8", function (err, data) {
    var users = JSON.parse(data);
    var user = users["user" + req.params.id];
    res.end(JSON.stringify(user));
  });
});
