


const fs = require("fs");
const path = require("path");

const inputPath = path.join(__dirname, "input.txt");
const outputPath = path.join(__dirname, "output.txt");

const readStream = fs.createReadStream(inputPath, { encoding: "utf-8" });
const writeStream = fs.createWriteStream(outputPath, { encoding: "utf-8" });

readStream.pipe(writeStream);

writeStream.on("finish", () => {
  console.log("Data successfully .");
});

writeStream.on("error", (err) => {
  console.error("Error writing file:", err);
});


// Errors:
// 1) Error: ENOENT: no such file or directory, open 'input.txt' ,input.txt file missing

// 2) Data not copied fully ,Forgot to use stream.pipe()
