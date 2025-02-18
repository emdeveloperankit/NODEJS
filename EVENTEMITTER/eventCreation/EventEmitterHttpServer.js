const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("New request received.");
  res.end("Hello from server!");
});

server.listen(3000, () => console.log("Server running on port 3000"));
