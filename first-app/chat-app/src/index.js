const app = require('./app');
const port = process.env.PORT || 3000;
const http = require('http');
const socketio = require('socket.io');

const server = http.createServer(app);
const io = socketio(server);

let count=0;

io.on('connection',(socket)=> {
    console.log("New client connected");
    socket.emit('countUpdated',count);

    socket.on('increment',()=> {
        count++;
       socket.emit('countUpdated',count);
    })
});

server.listen(port,() => {
    console.log("Chat Application started");
});