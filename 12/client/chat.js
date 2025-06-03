const socket = io()

socket.on('messageFromServer', (message) => {
    console.log(message)
    const messagesElement = document.getElementById('messages')
    const messageElement = document.createElement('div')
    messageElement.innerText = message
    messagesElement.appendChild(messageElement)
})

const sendMessage = () => {
    const inputElement = document.getElementById('message');
    socket.emit('messageFromClient', inputElement.value)
    inputElement.value = ""
}

const searchParams = new URLSearchParams(window.location.search)

socket.emit('join', searchParams.get('username'), searchParams.get('roomId'))