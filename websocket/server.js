const WebSocket = require("ws");

const wsServer = new WebSocket.Server({ port: 8080 });

console.log("Web Socket Server running on http://localhost:8080");

wsServer.on("connection", (ws) => {
  console.log(`[${new Date().toISOString()}] New Client Connected!`);

  ws.send("Welcome to WebSocket Server!");

  ws.on("message", (message) => {
    console.log(`Received: ${message}`);
    ws.send(`Server Received: ${message}`);
  });

  ws.on("close", () => {
    console.log("Client Disconnected");
  });
});
