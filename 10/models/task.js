const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: String,
    isDone: Boolean
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task