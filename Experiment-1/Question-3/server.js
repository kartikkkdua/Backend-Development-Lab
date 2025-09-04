const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
  fs.readFile("sample.txt", "utf8", (err, data) => {
    if (err) {
      res.end("File not found");
      return;
    }
    res.end(data);
  });
}).listen(3000, () => {
  console.log("Server running at http://localhost:3000");
})


// Errors :
// 1) Error: listen EADDRINUSE: address already in use :::3000
// 2) ReferenceError: fs is not defined ,Forgot to require("fs")
