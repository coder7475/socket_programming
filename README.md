# Socket Programming Project

## Introduction

In the realm of network programming, sockets serve as fundamental building blocks for enabling communication between devices over a network. This project demonstrates practical implementations of different socket types and communication protocols with working examples.

## Project Structure

```
/socket-programming
├── README.md
├── client/              # TCP, UDP, and WebSocket client implementations
│   ├── client.js        # TCP client implementation
│   ├── udpClient.js     # UDP client implementation
│   └── wsClient.js      # WebSocket client implementation
├── server/              # TCP, UDP, and WebSocket server implementations
│   ├── server.js        # TCP server implementation
│   ├── udpServer.js     # UDP server implementation
│   └── wsServer.js      # WebSocket server implementation
├── websocket/           # Standalone WebSocket example
│   ├── client.js        # WebSocket client
│   ├── index.html       # HTML interface for WebSocket
│   └── server.js        # WebSocket server
└── chatapp_socketio/    # Real-time chat application using Socket.IO
    ├── index.js         # Socket.IO server implementation
    └── public/          # Frontend assets
```

## Implementations

This project includes working examples of the following socket types:

### 1. TCP Sockets

Transmission Control Protocol (TCP) implementation with a focus on reliable communication.

**Features**:
- Connection-oriented communication
- Reliable data delivery
- Error handling

**Running the example**:
```bash
# Start the server
cd server
pnpm run tcp

# In another terminal, start the client
cd client
pnpm run tcp
```

### 2. UDP Sockets

User Datagram Protocol (UDP) implementation demonstrating fast, connectionless communication.

**Features**:
- Connectionless communication
- Lower latency than TCP
- Simpler implementation

**Running the example**:
```bash
# Start the server
cd server
pnpm run udp

# In another terminal, start the client
cd client
pnpm run udp
```

### 3. WebSockets

WebSocket implementation for full-duplex, real-time communication.

**Features**:
- Persistent connection
- Bidirectional communication
- Real-time data transfer

**Running the example**:
```bash
# Start the server
cd server
pnpm run ws

# In another terminal, start the client
cd client
pnpm run ws
```

### 4. Socket.IO Chat Application

A complete real-time chat application built with Socket.IO and Express.

**Features**:
- Multiple chat rooms
- User presence notifications
- Real-time message delivery
- Room creation functionality

**Running the chat app**:
```bash
cd chatapp_socketio
pnpm install
pnpm run dev  # For development with auto-restart
# or
pnpm start    # For production
```

Access the chat application at: http://localhost:3000

## Technology Stack

- **Runtime**: Node.js
- **Package Manager**: pnpm
- **Libraries**:
  - Built-in Node.js modules (`net`, `dgram`, `http`)
  - `ws` for WebSocket implementation
  - `socket.io` for enhanced WebSocket functionality
  - `express` for HTTP server in the chat application

## Socket Types Overview

### TCP Sockets
- **Characteristics**: Reliable, connection-oriented, ordered delivery of data
- **Best for**: Applications requiring data integrity (file transfers, web browsing)

### UDP Sockets
- **Characteristics**: Fast, connectionless, no guarantee of delivery or order
- **Best for**: Real-time applications where speed is critical (video streaming, gaming)

### WebSockets
- **Characteristics**: Persistent, full-duplex communication over a single TCP connection
- **Best for**: Real-time web applications (chat, live notifications)

### Socket.IO
- **Characteristics**: Enhanced WebSockets with fallbacks, room-based broadcasting
- **Best for**: Production-ready real-time applications with browser compatibility needs

## Getting Started

### Prerequisites
- Node.js (v14 or higher recommended)
- pnpm package manager

### Installation

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies for each example:
   ```bash
   cd server && pnpm install
   cd ../client && pnpm install
   cd ../websocket && pnpm install
   cd ../chatapp_socketio && pnpm install
   ```

## Learning Resources

- [Node.js Net Module Documentation](https://nodejs.org/api/net.html)
- [Node.js Dgram Module Documentation](https://nodejs.org/api/dgram.html)
- [WebSocket Library Documentation](https://github.com/websockets/ws)
- [Socket.IO Documentation](https://socket.io/docs/v4/)
