var http = require("http");
var dt = require("./mod.js");
//this is how we import the module

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("The date and time are currently: " + dt.myDateTime());
  })
  .listen(8080);
