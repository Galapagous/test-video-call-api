import http from "http";
import app from "./src/app.js";
import initializeSocket from "./src/socket/index.socket.js";


const PORT = 8080;

// Create HTTP server
const server = http.createServer(app);

// Initialize Socket.io
initializeSocket(server);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
