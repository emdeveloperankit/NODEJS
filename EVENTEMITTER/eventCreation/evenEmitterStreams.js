const fs = require("fs");

const readStream = fs.createReadStream("file.txt");

readStream.on("data", (chunk) => {
  console.log("Received data:", chunk.toString());
});
