# **📌 Chapter 5: Creating a Web Server in Node.js**

## **1️⃣ Introduction to Node.js Web Servers**

Node.js provides the built-in `http` module to create web servers **without needing a separate web server like Apache or Nginx**.

✅ **Why use a Node.js Web Server?**
| Feature | Description |
|---------|-------------|
| **Lightweight** | No need for additional software like Apache. |
| **Non-blocking I/O** | Handles multiple requests efficiently. |
| **Flexible** | Can serve APIs, HTML, and static files. |

✅ **Import the `http` module:**

```js
const http = require("http");
```

---

## **2️⃣ Creating a Basic Web Server**

### **📌 (A) Create a Simple HTTP Server**

```js
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, World!");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
```

✅ **Run the server:**

```sh
node server.js
```

✅ **Visit in browser:** `http://localhost:3000/` → Shows `Hello, World!`

---

## **3️⃣ Handling Different Routes**

We can respond differently based on the requested URL.

```js
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home Page");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("About Page");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 - Page Not Found");
  }
});
```

✅ **Visit:**

- `http://localhost:3000/` → Home Page
- `http://localhost:3000/about` → About Page
- `http://localhost:3000/unknown` → 404 Not Found

---

## **4️⃣ Serving HTML Files**

Instead of plain text, we can serve **HTML files** using the `fs` module.

```js
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("index.html", (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end("Server Error");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  }
});
```

✅ **Create `index.html` file:**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Node.js Web Server</title>
  </head>
  <body>
    <h1>Welcome to Node.js Web Server</h1>
  </body>
</html>
```

✅ **Visit:** `http://localhost:3000/` to see the HTML page.

---

## **5️⃣ Handling JSON Responses (API Example)**

We can also return JSON data for **building APIs**.

```js
const server = http.createServer((req, res) => {
  if (req.url === "/api") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Hello, API!" }));
  }
});
```

✅ **Visit:** `http://localhost:3000/api` → Returns JSON data

---

## **6️⃣ Handling POST Requests (Receiving Data)**

To process incoming **POST requests**, we read the request body.

```js
const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/submit") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(`Received data: ${body}`);
    });
  }
});
```

✅ **Test with curl:**

```sh
curl -X POST -d "name=Alice" http://localhost:3000/submit
```

✅ **Response:** `Received data: name=Alice`

---

## **7️⃣ Using Express.js Instead of `http` Module**

Express simplifies handling requests and responses.

```js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.listen(3000, () => console.log("Express server running on port 3000"));
```

✅ **Run:** `node server.js`
✅ **Visit:** `http://localhost:3000/`

---

## **📌 Summary Table**

| Feature              | Node.js Method                  |
| -------------------- | ------------------------------- |
| **Create Server**    | `http.createServer()`           |
| **Listen on Port**   | `server.listen(port, callback)` |
| **Handle Routes**    | `req.url` & `res.writeHead()`   |
| **Serve HTML Files** | `fs.readFile()`                 |
| **Return JSON Data** | `JSON.stringify()`              |
| **Handle POST Data** | `req.on('data', callback)`      |

---

## **🚀 Next Steps**

✅ **Practice**: Build a simple web API with Node.js.  
✅ **Experiment**: Serve CSS & images using the `fs` module.  
✅ **Learn More**: Read the [Node.js HTTP Documentation](https://nodejs.org/api/http.html).
