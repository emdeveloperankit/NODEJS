const EventEmitter = require("events");
const event = new EventEmitter();

// Set up an event listener for the 'orderPlaced' event
event.on("orderPlaced", (orderId, amount) => {
  console.log(`Order ID: ${orderId}, Total: $${amount}`);
});

// Emit the 'orderPlaced' event with order ID 12345 and amount 99.99
event.emit("orderPlaced", 12345, 99.99); // Logs: Order ID: 12345, Total: $99.99
// In the above code, we have defined an event named  orderPlaced  and attached a callback function to it. The  emit()  method is used to trigger the event. We have passed two arguments,  orderId  and  amount , to the event handler function.
