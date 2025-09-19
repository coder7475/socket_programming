const express = require("express");
const http = require("http");
const path = require("path");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

io.on("connection", () => {
  console.log("A user is connected");

  io.on("chat message", (message) => {
    console.log(`Message Received: ${message}!`);

    // Broadcast to all clients
    io.emit("chat message", message);
  });

  io.on("disconnection", () => {
    console.log("A user is disconnected!");
  });
});

server.listen(3000, () => {
  console.log("Server is Running at port 3000");
});
