const http = require('http');
const express = require('express');
const { Server } = require('socket.io')
const app = express();
const server = http.createServer(app);
const io = new Server(server,{
    cors: {
      origin: "*", // Adjust this to your specific frontend origin
      methods: ["GET", "POST"]
    }
  });

const PORT = 9500;

// Socket.io
io.on('connection', (socket) => {
    console.log("A new user has connected", socket.id)
    socket.on("send-message", (message, roomID) => { 
        if(roomID == ""){
            socket.broadcast.emit("recieve-message", message);
        }else{
            socket.to(roomID).emit("recieve-message", message);
        }
        
    })

    // Join Room
    socket.on('join-room', (roomId, cb) => {
        socket.join(roomId)
        cb(`Joined room ${roomId}`)
    })
})

app.use(express.static('./client'))

server.listen(PORT, () => console.log("Sever is now listening to port ", PORT));