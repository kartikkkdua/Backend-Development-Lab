const fs = require("fs");

if (fs.existsSync("data.txt")) {
  const stream = fs.createReadStream("data.txt", "utf8");
  stream.on("data",data => console.log(data));
} else {
  console.log("Error: data.txt not found");
}
