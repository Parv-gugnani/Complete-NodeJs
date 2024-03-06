var http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Hello world!");
  })
  .listen(8080);

// The code tells the computer to write "Hello World!" if anyone (e.g. a web browser) tries to access your computer on port 8080.
//acces to http://localhost:8080/
