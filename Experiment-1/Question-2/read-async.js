const fs = require("fs/promises");
const path = require("path");

async function readFile(filename) {
  try {
    const abs = path.resolve(filename);
    const data = await fs.readFile(abs, "utf8");
    console.log("data:", data);
  } catch {
    console.error("Error reading file!");
  }
}

readFile("abc.txt");




// Errors:
// 1) Error: Cannot find module 'fs/promises'
// 2) Error: ENOENT: no such file or directory, open 'abc.txt' because file does not exist, forgot to create file
