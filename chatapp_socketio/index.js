const express = require("express");
const http = require("http");
const path = require("path");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const rooms = new Set(["general", "random"]);

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

io.on("connection", (socket) => {
  socket.username = "Anonymous";
  console.log(`${socket.username} is connected`);

  socket.on("chat message", (message) => {
    console.log(`${socket.username} Sent: ${message}!`);
    const room =
      Array.from(socket.rooms).find((r) => r !== socket.id) || "general";

    // Broadcast to all clients
    socket.to(room).emit("chat message", {
      username: socket.username,
      message,
      timestamp: new Date().toISOString(),
      room,
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

  // handle chat rooms
  socket.on("join room", (room) => {
    // leave all room excepts sockets own private room represented by it's id
    socket.rooms.forEach((r) => {
      if (r !== socket.id) {
        socket.leave(r);
        socket.emit("left room", r);
      }
    });

    socket.join(room);
    socket.emit("joined room", room);

    socket.to(room).emit("room message", {
      username: "System",
      message: `${socket.username} has joined the room`,
      timestamp: new Date().toISOString(),
    });
  });

  socket.on("create room", (roomName) => {
    if (!rooms.has(roomName)) {
      rooms.add(roomName);
      io.emit("room created", roomName);
    }
  });

  socket.on("disconnect", () => {
    console.log(`${socket.username} is disconnected`);
    io.emit("user left", {
      username: socket.username,
    });
  });
});

server.listen(3000, () => {
  console.log("Server is Running at port 3000");
});
