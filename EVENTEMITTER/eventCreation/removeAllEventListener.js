const EventEmitter = require("events");
const event = new EventEmitter();

// Add multiple listeners for the 'logout' event
event.on("logout", () => console.log("User logged out."));
event.on("logout", () => console.log("Session cleared."));

// Remove all listeners for the 'logout' event
event.removeAllListeners("logout");

// Emit the 'logout' event (no output since all listeners are removed)
event.emit("logout"); // No output
