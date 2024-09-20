var events = require("events");

var eventEmitter = new events.EventEmitter();

// eventEmitter.on("eventName", eventHandler);

// eventEmitter.emit("eventName");

var connectHandler = function connected() {
  console.log("connection successful.");
};

eventEmitter.on("connection", connectHandler);

eventEmitter.on("data_received", function () {
  console.log("data received sucessfully.");
});

eventEmitter.emit("connection");

eventEmitter.emit("data_received");
console.log("Program End!");
