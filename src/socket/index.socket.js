import { disconnect } from "mongoose";
import { Server } from "socket.io";

const initializeSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "*", 
      methods: ["GET", "POST"],
    },
  });

  // const rooms = new Map()

  io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`);

    socket.emit("me", socket.id)
    // console.log('me emitted')

    socket.on("disconnect", ()=>{
      socket.broadcast.emit("call ended")
    })

    socket.on("callUser", (data) => { // Changed to match frontend event name case
      // console.log("Received call request:", data);
      io.to(data.usertoCall).emit("callUser", {
        signal: data.signalData,
        from: data.from,
        name: data.name
      });
    });

    socket.on("answerCall", (data) => {
      // console.log("Call answered:", data);
      io.to(data.to).emit("callAccepted", data);
    });

  });

  return io;
};

export default initializeSocket;
