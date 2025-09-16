const net = require("net");

// Connect to server
const client = net.createConnection({ port: 3000 }, () => {
  console.log("Connected to server");
  client.write("Hello Server from client 2!");
});

// Receive data from server
client.on("data", (data) => {
  console.log("Server says:", data.toString());
});

// Handle disconnection
client.on("end", () => {
  console.log("Disconnected from server");
});
