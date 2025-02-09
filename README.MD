# Node.js Basics

Welcome to the **Node.js Basics** project! This repository is a practical introduction to using Node.js for file operations, event handling, and working with npm modules.

## Features

This project covers the following fundamental Node.js concepts:

1. **File Operations**

   - Reading files
   - Writing files
   - Updating files
   - Deleting files
   - Renaming files

2. **Event Emitters**

   - Creating and handling custom events

3. **NPM Modules**
   - Installing and using npm modules

---

## Prerequisites

Before you begin, ensure you have:

- **Node.js** installed on your system. [Download Node.js](https://nodejs.org)
- A basic understanding of JavaScript.

---

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/nodejs-basics.git
   cd nodejs-basics
   ```

2. Initialize a Node.js project:

   ```bash
   npm init -y
   ```

3. Install required npm packages (if any):
   ```bash
   npm install
   ```

---

## Usage

### File Operations

#### Read a File

```javascript
const fs = require("fs");
fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

#### Write to a File

```javascript
fs.writeFile("example.txt", "This is a new file.", (err) => {
  if (err) throw err;
  console.log("File written successfully!");
});
```

#### Update a File

```javascript
fs.appendFile("example.txt", "\nAdding new content.", (err) => {
  if (err) throw err;
  console.log("File updated successfully!");
});
```

#### Delete a File

```javascript
fs.unlink("example.txt", (err) => {
  if (err) throw err;
  console.log("File deleted successfully!");
});
```

#### Rename a File

```javascript
fs.rename("example.txt", "newname.txt", (err) => {
  if (err) throw err;
  console.log("File renamed successfully!");
});
```

---

### Event Emitters

#### Create and Emit Events

```javascript
const EventEmitter = require("events");
const myEmitter = new EventEmitter();

// Define an event
myEmitter.on("greet", () => {
  console.log("Hello! Welcome to Node.js.");
});

// Emit the event
myEmitter.emit("greet");
```

---

### Using NPM Modules

#### Installing a Module (Example: `chalk`)

```bash
npm install chalk
```

#### Using the Module

```javascript
const chalk = require("chalk");
console.log(chalk.green("This text is green!"));
```

---

## Contributing

Feel free to contribute to this project by submitting issues or pull requests.

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add a new feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- [Node.js Documentation](https://nodejs.org/en/docs/)
- [npm Documentation](https://docs.npmjs.com/)
