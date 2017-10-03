var http = require("http");

http.createServer(function (request, response) {
    response.end("Hello, NodeJS!");
}).listen(3000, "127.0.0.1", function () {
    console.log("Server has started to listen request");
});