# **📌 Chapter 1: Getting Started with Node.js & Express.js**

## **1️⃣ Introduction to Node.js**

Node.js is a **JavaScript runtime** built on Chrome's V8 engine. It allows running JavaScript **outside the browser**, making it perfect for backend development.

✅ **Why use Node.js?**
| Feature | Description |
|---------|------------|
| **Fast** | Uses non-blocking, event-driven architecture. |
| **Scalable** | Handles multiple connections asynchronously. |
| **Full-Stack JS** | Use JavaScript for both frontend and backend. |
| **Huge Ecosystem** | Access thousands of npm packages. |

---

## **2️⃣ Installing Node.js & npm**

Download and install Node.js from [Node.js Official Website](https://nodejs.org/).

✅ **Verify installation:**

```sh
node -v
npm -v
```

✅ **Initialize a Node.js project:**

```sh
mkdir my-app && cd my-app
npm init -y
```

This creates a `package.json` file for managing dependencies.

---

## **3️⃣ Setting Up an Express.js Server**

Express.js is a **minimal and fast web framework** for Node.js.

✅ **Install Express:**

```sh
npm install express
```

✅ **Create `server.js`:**

```js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

✅ **Run the server:**

```sh
node server.js
```

✅ **Visit in browser:**  
`http://localhost:3000/` → Shows `"Hello, Express!"`

---

## **4️⃣ Understanding `package.json` & npm Scripts**

`package.json` is the configuration file for a Node.js project.

✅ **Modify `package.json` to add a start script:**

```json
"scripts": {
    "start": "node server.js"
}
```

✅ **Now, start the server using:**

```sh
npm start
```

---

## **5️⃣ Installing Nodemon for Auto-Restart**

Nodemon **automatically restarts the server** when file changes are detected.

✅ **Install nodemon:**

```sh
npm install --save-dev nodemon
```

✅ **Modify `package.json` scripts:**

```json
"scripts": {
    "dev": "nodemon server.js"
}
```

✅ **Start the server in development mode:**

```sh
npm run dev
```

---

## **6️⃣ Next Steps**

✅ **Practice**: Create more routes in Express.  
✅ **Experiment**: Add middleware and static file serving.  
✅ **Learn More**: Read the [Express.js Documentation](https://expressjs.com/).
