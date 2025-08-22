const fs = require("fs");

const stream = fs.createWriteStream("output.txt");
stream.write("Hello, Node.js!");
stream.end(() => console.log("Success: Wrote to output.txt"));