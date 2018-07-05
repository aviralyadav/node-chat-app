const path = require('path');
const http = require('http');

const express = require('express');
const socketIO = require('socket.io');
const app = express();

const port = process.env.PORT || 3001;

const publicPath = path.join(__dirname, '../public');

app.use(express.static(publicPath));
var server = http.createServer(app);
var io = socketIO(server);

io.on('connection', (socket)=>{
    console.log('New user connected');

    socket.on('disconnect', ()=>{
        console.log('User was disconnected');
    });
});

server.listen(port, ()=>{
    console.log(`Server is started at ${port}`);
});