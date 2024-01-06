let express = require('express');
let cors = require('cors');
let socket = require('socket.io');

let app = express();

app.use(cors());
app.use(express.static('public'));

let server = app.listen('9000');

let io = socket(server);

// listener triggered ever connection
io.sockets.on('connection', newConnection);

function newConnection(socket) {
    console.log('New Connection', socket.id);

    socket.on('mouse', mouseMsg);

    function mouseMsg(data) {
        socket.broadcast.emit('mouseOpponent', data)
    }
}

