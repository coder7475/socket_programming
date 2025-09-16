const net = require("net");

// Create server
const server = net.createServer((socket) => {
  console.log("New Client connected!!");

  socket.write("Welcome! You are connected to server.\n");

  socket.on("data", (data) => {
    console.log("Client says: ", data.toString());
    socket.write(`Server received: ${data}`);
  });

  socket.on("end", () => {
    console.log("Client Disconnected!");
  });
});

server.listen(3000, () => {
  console.log("TCP Server running on port 3000");
});
