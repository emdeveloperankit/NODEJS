const EventEmitter = require("events");
const event = new EventEmitter();

// Set up an event listener for the 'userLoggedIn' event
event.on("userLoggedIn", (username) => {
  console.log(`Welcome, ${username}!`);
});

// Emit the 'userLoggedIn' event with 'JohnDoe' as the username
event.emit("userLoggedIn", "AnkitCoder"); // Logs: Welcome, JohnDoe!
