const EventEmitter = require("events");
const event = new EventEmitter();

// Define the greet function
const greet = () => {
  console.log("Hello, World!");
};

// Add the greet function as a listener for the 'greet' event
event.on("greet", greet);

// Remove the greet function as a listener for the 'greet' event
event.removeListener("greet", greet);

// Emit the 'greet' event (no output since the listener is removed)
event.emit("greet"); // No output
