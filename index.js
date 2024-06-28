const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  console.log('a user connected');
  
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('message', (msg) => {
    console.log(msg)
    io.emit('getmsg', msg);
  });

  socket.on('video', chunsk => {
    socket.broadcast.emit('showVideo', chunsk);
  });
});

const PORT = process.env.PORT;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));