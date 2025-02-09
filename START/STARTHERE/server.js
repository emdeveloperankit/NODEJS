// for creating you should already know about the some things like html,css and the javascript
// possibly experience with the backend technologies like node.js,express.js etc. other libraries and frameworks

// how nodejs differs from vanilla js
// 1) node runs on a server - not in a browser(backend not frontend)
// 2) node is built on top of chrome's v8 engine - which is a high
//3)The console is the terminal window
console.log("hello world");

const os = require("os");
const path = require("path");

// for importing the other files
// const math = require("./math");

console.log(os.type());
console.log(os.version());
console.log(os.homedir());

console.log(__dirname);
console.log(__filename);

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));

console.log(path.parse(__filename));
