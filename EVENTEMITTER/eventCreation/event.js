const EventEmitter = require("events");
const event = new EventEmitter();

// Define an event
event.on("greet", () => {
  console.log("Hello! Event emitted" + "you are in event.js");
});

// Trigger the event
event.emit("greet");

// Output:
// Hello! Event emitted.
// In the above code, we have created an event using the  EventEmitter  class. We have defined an event named  greet  and attached a callback function to it. The  emit()  method is used to trigger the event.
// Event Arguments
// You can pass arguments to the event handler function by passing them as additional arguments to the  emit()  method.
