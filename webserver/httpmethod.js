// A server should handle different HTTP methods like:

// GET → Retrieve data
// POST → Submit data
// PUT → Update data
// DELETE → Remove data

// In this example, we'll use POST method to receive data from a client and respond with the received data.

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(`Data received: ${body}`);
    });
  }
});

server.listen(3000, () => console.log("Server running on port 3000"));
