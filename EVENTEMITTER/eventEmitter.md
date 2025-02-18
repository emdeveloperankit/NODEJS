# **📌 Chapter 4: EventEmitter in Node.js**

## **1️⃣ What is EventEmitter?**

The `EventEmitter` class in Node.js allows handling **events** asynchronously using an event-driven architecture.

✅ **Why use EventEmitter?**
| Feature | Description |
|---------|-------------|
| **Event-Driven** | Enables asynchronous programming by handling events. |
| **Custom Events** | Define and trigger custom events. |
| **Built-in Support** | Many core modules (like `http`) use EventEmitter. |

✅ **Import the `events` module:**

```js
const EventEmitter = require("events");
```

---

## **2️⃣ Creating & Using an EventEmitter Instance**

### **📌 (A) Create an EventEmitter Object**

```js
const eventEmitter = new EventEmitter();
```

### **📌 (B) Register an Event Listener**

```js
eventEmitter.on("greet", (name) => {
  console.log(`Hello, ${name}!`);
});
```

### **📌 (C) Emit an Event**

```js
eventEmitter.emit("greet", "Alice");
```

✅ **Output:** `Hello, Alice!`

---

## **3️⃣ Handling Events with Multiple Listeners**

Multiple listeners can be attached to a single event.

```js
eventEmitter.on("message", (msg) => {
  console.log(`Listener 1: ${msg}`);
});

eventEmitter.on("message", (msg) => {
  console.log(`Listener 2: ${msg}`);
});

eventEmitter.emit("message", "Event-driven programming is powerful!");
```

✅ **Output:**

```
Listener 1: Event-driven programming is powerful!
Listener 2: Event-driven programming is powerful!
```

---

## **4️⃣ Removing Event Listeners**

### **📌 (A) Remove a Specific Listener**

```js
const callback = (msg) => console.log(`Message: ${msg}`);
eventEmitter.on("log", callback);
eventEmitter.removeListener("log", callback);
eventEmitter.emit("log", "This will not be logged");
```

✅ **Output:** Nothing (Listener removed)

### **📌 (B) Remove All Listeners for an Event**

```js
eventEmitter.removeAllListeners("message");
```

---

## **5️⃣ Using `once()` for One-Time Listeners**

A listener registered with `once()` executes **only once**.

```js
eventEmitter.once("init", () => {
  console.log("This will run only once");
});

eventEmitter.emit("init"); // Runs

eventEmitter.emit("init"); // Does not run
```

✅ **Output:** `This will run only once`

---

## **6️⃣ Built-in EventEmitters in Node.js**

Many Node.js modules like **HTTP, Streams, and Process** are built on EventEmitter.

### **📌 (A) Listening for Process Events**

```js
process.on("exit", (code) => {
  console.log(`Process exiting with code: ${code}`);
});
```

✅ **This runs when the Node.js process is about to exit.**

### **📌 (B) Handling Stream Events**

```js
const fs = require("fs");
const readStream = fs.createReadStream("example.txt");

readStream.on("data", (chunk) => {
  console.log(`Received data: ${chunk.length} bytes`);
});
```

✅ **Listens for `data` events when reading files.**

---

## **📌 Summary Table**

| Feature                     | Method                                           |
| --------------------------- | ------------------------------------------------ |
| **Create EventEmitter**     | `new EventEmitter()`                             |
| **Register Event Listener** | `eventEmitter.on('event', callback)`             |
| **Emit Event**              | `eventEmitter.emit('event', data)`               |
| **Remove Listener**         | `eventEmitter.removeListener('event', callback)` |
| **Remove All Listeners**    | `eventEmitter.removeAllListeners('event')`       |
| **One-Time Listener**       | `eventEmitter.once('event', callback)`           |

---

## **🚀 Next Steps**

✅ **Practice**: Create a custom event-driven logger system.  
✅ **Experiment**: Use EventEmitter with an HTTP server.  
✅ **Learn More**: Read the [Node.js EventEmitter Docs](https://nodejs.org/api/events.html).
