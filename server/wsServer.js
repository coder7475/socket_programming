const WebSocket = require("ws");

const server = new WebSocket.Server({ port: 5000 });

server.on("connection", (socket) => {
  console.log("New client connected");

  socket.send("Welcome to WebSocket server!");

  socket.on("message", (msg) => {
    console.log("Client says:", msg.toString());
    socket.send(`Server got your message: ${msg}`);
  });

  socket.on("close", () => {
    console.log("Client disconnected");
  });
});

console.log("WebSocket server running on ws://localhost:5000");
