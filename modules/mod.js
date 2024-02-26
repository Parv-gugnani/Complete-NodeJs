//To include a module use the require()
// var http = require("http");
//Now your application has access to the HTTP module, and is able to create a server:
// var dt = require("./mydatetime");

// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.write("The date and time are currently: " + dt.myDateTime());
//   })
//   .listen(8080);

//we can create out own module
exports.myDateTime = function () {
  return Date();
};

//use the export keyword to make propties method availbe outside the module
