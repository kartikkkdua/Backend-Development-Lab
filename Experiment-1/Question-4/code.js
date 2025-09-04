const fs = require("fs");

if (fs.existsSync("data.txt")) {
  const stream = fs.createReadStream("data.txt", "utf8");
  stream.on("data",data => console.log(data));
} else {
  console.log("Error: data.txt not found");
}

// Errors :

// 1) ReferenceError: fs is not defined, Forgot to require("fs")
// 2) Output came in chunks line by line instead of full file ,Because createReadStream reads in parts.
// 3) Permission denied error, Tried to read a file without read permissions