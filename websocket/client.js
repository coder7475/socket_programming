const WebSocket = require("ws");
const readline = require("readline");

// readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const ws = new WebSocket("ws://localhost:8080");

ws.on("open", () => {
  console.log("Connected to the WebSocket Server!");
  promptForMessage();
});

ws.on("message", (message) => {
  console.log(`Message from Server: ${message}`);
});

ws.on("error", (error) => {
  console.error(error);
});

ws.on("close", () => {
  console.log("Disconnected From Server");
  process.exit(0);
});

function promptForMessage() {
  rl.question("Enter a message(or 'exit' to quit): ", (message) => {
    if (message.toLowerCase() === "exit") {
      ws.close();
      rl.close();
      return;
    }
    ws.send(message);
    promptForMessage();
  });
}
