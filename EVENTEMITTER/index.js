const { log } = require("util");
const logEvents = require("./logEvents");

const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

// initialize the object

const myEmitter = new MyEmitter();

// listen for an log  event
// myEmitter.on("log", logEvents);
myEmitter.on("log", (msg) => logEvents(msg));

setTimeout(() => {
  //emit event
  myEmitter.emit("log", "Log event emitted!");
}, 1000);

setTimeout(() => {
  //emit event
  myEmitter.emit("log", "Goodbye, World!");
}, 2000);
