// we will do here reading the files , deleting and even writing it
const fs = require("fs");
const path = require("path");

// for the same devices

// fs.readFile("./files/starter.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// if something we are using the different devices so use this stupid codes
fs.readFile(
  path.join(__dirname, "files", "starter.txt"),
  "utf-8",
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
);

console.log("hello...");

fs.writeFile(
  path.join(__dirname, "files", "reply.txt"),
  "bye bye chatgpt",
  (err) => {
    if (err) throw err;
    console.log("file written operation is complete!!!");

    //for appending the existing files
    fs.appendFile(
      path.join(__dirname, "files", "reply.txt"),
      "\n\nYes it is simple to append.",
      (err) => {
        if (err) throw err;
        console.log("Done appended to file!");

        //for renaming the file
        fs.rename(
          path.join(__dirname, "files", "reply.txt"),
          path.join(__dirname, "files", "rename.txt"),
          (err) => {
            if (err) throw err;
            console.log("File Renamed!");
          }
        );
      }
    );
  }
);

fs.appendFile(
  path.join(__dirname, "files", "test.txt"),
  "We are testing here.",
  (err) => {
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
  }
);

// exit on uncaught errors
process.on("uncaughtException", (err) => {
  console.error("An uncaught error occurred:", err);
  console.error("Exiting due to unhandled error...");
  process.exit(1);
});
