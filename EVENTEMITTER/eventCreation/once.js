// Using .once() (Trigger Only Once)
// The .once() method listens for an event but only executes once.

const EventEmitter = require("events");
const event = new EventEmitter();

// Set up an event listener for the 'start' event that runs only once
event.once("start", () => {
  console.log("This event runs only once.");
});

// Emit the 'start' event
event.emit("start"); // Logs: This event runs only once.
event.emit("start"); // Does nothing, as the listener has been removed
event.emit("start"); // Logs: end event
