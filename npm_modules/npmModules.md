# **📌 Chapter 3: Working with npm Modules in Node.js**

## **1️⃣ What is npm?**

npm (**Node Package Manager**) is the default package manager for **Node.js**. It allows developers to:

- Install external libraries (modules) for use in Node.js projects.
- Manage project dependencies.
- Automate scripts and workflows using `package.json`.

✅ **Check npm version:**

```sh
npm -v
```

✅ **Initialize a new Node.js project:**

```sh
mkdir my-project && cd my-project
npm init -y
```

This creates a `package.json` file, which stores metadata and dependencies.

---

## **2️⃣ Installing & Using npm Packages**

### **📌 (A) Install a Package Locally**

```sh
npm install express
```

✅ Adds `express` to the `node_modules` folder and updates `package.json`.

### **📌 (B) Install a Package Globally**

```sh
npm install -g nodemon
```

✅ Installs `nodemon` globally, making it available across all projects.

### **📌 (C) Install Multiple Packages at Once**

```sh
npm install axios dotenv mongoose
```

✅ Installs `axios`, `dotenv`, and `mongoose` together.

---

## **3️⃣ Understanding `package.json` & `package-lock.json`**

✅ **`package.json`** – Contains project metadata and dependencies.

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "dependencies": {
    "express": "^4.17.1"
  }
}
```

✅ **`package-lock.json`** – Locks dependency versions for consistency across installs.

---

## **4️⃣ Managing Dependencies**

### **📌 (A) View Installed Packages**

```sh
npm list
```

### **📌 (B) Uninstall a Package**

```sh
npm uninstall express
```

### **📌 (C) Update All Packages**

```sh
npm update
```

### **📌 (D) Install Dependencies from `package.json`**

```sh
npm install
```

✅ This command reinstalls all dependencies listed in `package.json`.

---

## **5️⃣ Using npm Scripts**

Modify `package.json` to add custom scripts:

```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

✅ **Run Scripts:**

```sh
npm start  # Runs 'node server.js'
npm run dev  # Runs 'nodemon server.js'
```

---

## **6️⃣ Useful npm Packages for Node.js**

| Package      | Description                             |
| ------------ | --------------------------------------- |
| **express**  | Web framework for Node.js               |
| **mongoose** | MongoDB object modeling tool            |
| **dotenv**   | Loads environment variables from `.env` |
| **nodemon**  | Auto-restarts server on file changes    |
| **axios**    | Promise-based HTTP client               |

---

## **📌 Summary Table**

| Feature                      | Command                            |
| ---------------------------- | ---------------------------------- |
| **Initialize Project**       | `npm init -y`                      |
| **Install Package Locally**  | `npm install package-name`         |
| **Install Package Globally** | `npm install -g package-name`      |
| **Uninstall Package**        | `npm uninstall package-name`       |
| **Update Packages**          | `npm update`                       |
| **Run npm Scripts**          | `npm start`, `npm run script-name` |

---

## **🚀 Next Steps**

✅ **Practice**: Install and use Express.js in a small project.  
✅ **Experiment**: Create and publish your own npm package.  
✅ **Learn More**: Read the [npm Documentation](https://docs.npmjs.com/).
