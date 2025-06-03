const express = require('express')
const socketio = require('socket.io')
const http = require('http')
const { addUser, getUser, removeUser } = require('./utils')
const path = require('path')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

app.use(express.static(path.join(__dirname, "client")))

io.on('connection', (socket) => {

    socket.on('join', (username, roomId) => {
        socket.join(roomId)
        addUser(socket.id, username, roomId)
        socket.emit('messageFromServer', `Welcome,  ${username}`)
        socket.broadcast.to(roomId).emit('messageFromServer', `${username} has join the chat`)
    })

    socket.on('messageFromClient', (message) => {
        const user = getUser(socket.id)
        socket.emit('messageFromServer', `You: ${message}`)
        socket.broadcast.to(user.roomId).emit('messageFromServer', `${user.name}: ${message}`)
    })

    socket.on('disconnect', () => {
        const user = getUser(socket.id)
        if(user) {
            socket.broadcast.emit('messageFromServer', `${user.name} left the chat`)
            removeUser(socket.id)
        }
    })

})


server.listen(8888);