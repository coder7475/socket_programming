const dgram = require("dgram");
const client = dgram.createSocket("udp4");

client.send("Hello UDP Server!", 4000, "localhost", (err) => {
  if (err) console.error(err);
});

client.on("message", (msg) => {
  console.log("Server says:", msg.toString());
  client.close();
});
