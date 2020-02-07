var http = require("http");
// var fs = require("fs");
// var module1 = require("./module1");
// var module2 = require("./module2");

// function onRequest(request, response) {
//   response.writeHead(200, { "Content-Type": "text/html" });
//   fs.readFile("./index.html", null, function(error, data) {
//     if (error) {
//       response.writeHead(404);
//       response.write("File not found!");
//     } else {
//       response.write(data);
//     }
//     response.end();
//   });
// }

var app = require("./app");

http.createServer(app.handleRequests).listen(8000);
