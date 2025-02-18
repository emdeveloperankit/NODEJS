const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, World!");
});

server.listen(3000, () => console.log("Server running on port 3000"));

const http = require("http");

const server2 = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, World!");
});

server2.listen(4000, () => console.log("Server running on port 4000"));

// Create a proxy server to forward requests to the backend server
