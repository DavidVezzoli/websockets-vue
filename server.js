// const Express = require('express')()
// const Http = require('https').Server(Express)
// const Socketio = require('socket.io')(Http)

// var express = require('express');
// var app = express();
// var server = app.listen(8810);
// var Socketio = require('socket.io').listen(server);

const express = require('express')
const path = require('path')
const Http = require('http')
const PORT = process.env.PORT || 3000
const socketio = require('socket.io')
const app = express()
const server = Http.createServer(app)
const io = socketio(server)

app.use(express.static(path.join(__dirname, "public")))

server.listen(PORT, () => { console.log(`Server running on port ${PORT}`) })

var position = {
    x: 200,
    y: 200,
}

io.on('connection', socket => {
    socket.emit("position", position)
    socket.on('move', data => {
        switch (data) {
            case "left":
                position.x -= 5;
                io.emit('position', position)
                break
            case "right":
                position.x += 5;
                io.emit('position', position)
                break
            case "up":
                position.y -= 5;
                io.emit('position', position)
                break
            case "down":
                position.y += 5;
                io.emit('position', position)
                break
        }
    })
})

// Http.listen(3000, () => {
//     console.log('Listening at port 3000')
// })