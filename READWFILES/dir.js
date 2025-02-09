const fs = require("fs");

// for creating the directory
//for checking the directory is exist or not
if (!fs.existsSync("./new")) {
  fs.mkdir("./new", (err) => {
    if (err) throw err;
    console.log("Directory created!");
  });
}

if (!fs.existsSync("./new")) {
  fs.rmdir("./new", (err) => {
    if (err) throw err;
    console.log("Directory removed!");
  });
}
// for removing the directory
