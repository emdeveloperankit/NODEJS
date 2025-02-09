const fs = require("fs");
const rs = fs.createReadStream("./files/lorem.txt", { encoding: "utf8" });

const ws = fs.createWriteStream("./files/lorem_copy.txt");

// rs.on("data", (datachunk) => {
//   ws.write(datachunk);
//   console.log("your datachunk is done!");
// });

// Another way to do this
rs.pipe(ws);
console.log("you datachunk is done");
