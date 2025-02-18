const http = require("http");

const data = JSON.stringify({ name: "John Doe", age: 25 });

const server = http.createServer((req, res) => {
  if (req.url === "/api/user") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(data);
  }
});

server.listen(3040, () => console.log("API running on port 3400"));
