const EventEmitter = require("events");
const logger = new EventEmitter();

// Set up an event listener for the 'log' event
logger.on("log", (message) => {
  console.log(`Log Entry: ${message}`);
});

// Emit the 'log' event with the message 'User signed in'
logger.emit("log", "User signed in"); // Logs: Log Entry: User signed in
