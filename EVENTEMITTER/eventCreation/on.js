// Handling Events using .on() and .once()
// 📌 (A) Using .on() (Multiple Triggers)
// The .on() method listens for an event every time it is emitted

const EventEmitter = require("events");
const event = new EventEmitter();

// Set up an event listener for the 'click' event
event.on("click", () => {
  console.log("Button clicked!");
});

// Emit the 'click' event
event.emit("click"); // Logs: Button clicked!
event.emit("click"); // Logs: Button clicked!
event.emit("click"); // Logs: Button clicked!
