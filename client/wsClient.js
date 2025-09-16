const WebSocket = require("ws");

const client = new WebSocket("ws://localhost:5000");

client.on("open", () => {
  console.log("Connected to WebSocket server");
  client.send("Hello from client!");
});

client.on("message", (msg) => {
  console.log("Server says:", msg.toString());
});
