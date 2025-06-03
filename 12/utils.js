let users = []

const addUser = (socketId, username, roomId) => {
    const user = {id: socketId, name: username, roomId}
    users.push(user)
    return user
}

const getUser = (socketId) => {
    return users.find((user) => user.id === socketId)
}

const removeUser = (socketId) => {
    users = users.filter((user) => user.id !== socketId)
}

module.exports = {addUser, getUser, removeUser}