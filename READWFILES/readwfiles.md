# **📌 Chapter 2: Reading & Writing Files in Node.js**

## **1️⃣ Introduction to File System (fs) Module**

Node.js provides the built-in **File System (`fs`) module** to interact with files on the system.

✅ **Import the `fs` module:**

```js
const fs = require("fs");
```

✅ **Commonly used methods:**
| Method | Description |
|--------|-------------|
| `fs.readFile()` | Reads a file asynchronously. |
| `fs.readFileSync()` | Reads a file synchronously. |
| `fs.writeFile()` | Writes to a file asynchronously. |
| `fs.writeFileSync()` | Writes to a file synchronously. |
| `fs.appendFile()` | Appends data to a file. |
| `fs.unlink()` | Deletes a file. |
| `fs.rename()` | Renames a file. |

---

## **2️⃣ Reading Files in Node.js**

### **📌 (A) Asynchronous File Reading**

```js
fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File content:", data);
});
```

✅ **Handles errors and prints file content.**

### **📌 (B) Synchronous File Reading**

```js
try {
  const data = fs.readFileSync("example.txt", "utf8");
  console.log("File content:", data);
} catch (err) {
  console.error("Error reading file:", err);
}
```

✅ **Blocks execution until the file is read.**

---

## **3️⃣ Writing Files in Node.js**

### **📌 (A) Asynchronous File Writing**

```js
fs.writeFile("output.txt", "Hello, Node.js!", (err) => {
  if (err) {
    console.error("Error writing file:", err);
    return;
  }
  console.log("File written successfully!");
});
```

✅ **Creates or overwrites `output.txt` with new content.**

### **📌 (B) Synchronous File Writing**

```js
try {
  fs.writeFileSync("output.txt", "Hello, Node.js!");
  console.log("File written successfully!");
} catch (err) {
  console.error("Error writing file:", err);
}
```

✅ **Blocks execution until the file is written.**

---

## **4️⃣ Appending Data to a File**

### **📌 (A) Append Data Asynchronously**

```js
fs.appendFile("output.txt", "\nNew line appended!", (err) => {
  if (err) {
    console.error("Error appending file:", err);
    return;
  }
  console.log("Data appended successfully!");
});
```

✅ **Adds new data without overwriting the file.**

---

## **5️⃣ Deleting and Renaming Files**

### **📌 (A) Delete a File**

```js
fs.unlink("output.txt", (err) => {
  if (err) {
    console.error("Error deleting file:", err);
    return;
  }
  console.log("File deleted successfully!");
});
```

✅ **Removes `output.txt` from the system.**

### **📌 (B) Rename a File**

```js
fs.rename("oldname.txt", "newname.txt", (err) => {
  if (err) {
    console.error("Error renaming file:", err);
    return;
  }
  console.log("File renamed successfully!");
});
```

✅ **Renames `oldname.txt` to `newname.txt`.**

---

## **📌 Summary Table**

| Feature                | Method               |
| ---------------------- | -------------------- |
| **Read File (Async)**  | `fs.readFile()`      |
| **Read File (Sync)**   | `fs.readFileSync()`  |
| **Write File (Async)** | `fs.writeFile()`     |
| **Write File (Sync)**  | `fs.writeFileSync()` |
| **Append Data**        | `fs.appendFile()`    |
| **Delete File**        | `fs.unlink()`        |
| **Rename File**        | `fs.rename()`        |

---

## **🚀 Next Steps**

✅ **Practice**: Create a program that reads, modifies, and deletes a file.  
✅ **Experiment**: Use file system operations inside an Express.js server.  
✅ **Learn More**: Read the [Node.js `fs` module documentation](https://nodejs.org/api/fs.html).
