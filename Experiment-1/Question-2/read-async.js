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
