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

io.on("connection", (socket) => {
  console.log("A user is connected");

  socket.username = "Anonymous";

  socket.on("chat message", (message) => {
    console.log(`Message Received: ${message}!`);

    // Broadcast to all clients
    socket.emit("chat message", {
      username: socket.username,
      message,
      timestamp: new Date().toISOString(),
    });
  });

  socket.on("set username", (username) => {
    const oldUsername = socket.username;
    socket.username = username ?? "Anonymous";
    io.emit("user joined", {
      oldUsername,
      newUserName: socket.username,
    });
  });

  socket.on("disconnection", () => {
    console.log("A user is disconnected!");
    io.emit("user left", {
      username: socket.username,
    });
  });
});

server.listen(3000, () => {
  console.log("Server is Running at port 3000");
});
