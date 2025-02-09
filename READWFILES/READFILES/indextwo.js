//This is another way to do the index.js like files handling i hope you got it bro
const fsPromises = require("fs").promises;

const path = require("path");

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "node.txt"),
      "utf8"
    );
    console.log("Data is successfully read!!!!");
    console.log(data);
    await fsPromises.writeFile(
      path.join(__dirname, "files", "new-file.txt"),
      data
    );
    console.log("Data is successfully written!!!!");
    //for deleting the file
    await fsPromises.unlink(path.join(__dirname, "files", "starter.txt"));
    console.log("File is successfully deleted!!!!");

    //for appending data to the file
    await fsPromises.appendFile(
      path.join(__dirname, "files", "new-file.txt"),
      "\n\nnice to meet you bro."
    );
    console.log("Data is successfully written!!!!");
    await fsPromises.rename(
      path.join(__dirname, "files", "new-file.txt"),
      path.join(__dirname, "files", "renamednew.txt")
    );

    console.log("File is successfully renamed!!!!");

    //for reading the new files
    const newFileData = await fsPromises.readFile(
      path.join(__dirname, "files", "renamedcomplete.txt"),
      "utf8"
    );
    console.log(newFileData);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
fileOps();
