// const http = require("http");
// const fs = require("fs");
// const path = require("path");

// const server = http.createServer((req, res) => {
//   let filePath = path.join(__dirname, req.url === "/" ? "index.html" : req.url);

//   fs.readFile(filePath, (err, data) => {
//     if (err) {
//       res.writeHead(404, { "Content-Type": "text/plain" });
//       res.end("404 Not Found");
//     } else {
//       res.writeHead(200);
//       res.end(data);
//     }
//   });
// });

server.listen(3080, () => console.log("Static server running"));

const http = require("http");
const fs = require("fs");
const path = require("path");
const staticServer = http.createServer((req, res) => {
  let filePath = path.join(__dirname, req.url === "/" ? "index.html" : req.url);
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Not Found");
    } else {
      res.writeHead(200);
      res.end(data);
    }
  });
  server.listen(3900, () => console.log("Static server running"));
});
