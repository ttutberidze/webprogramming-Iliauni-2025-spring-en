const mongoose = require('mongoose');
const {ObjectId} = require('mongodb')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: Number,
    skills: [String],
    tasks: [{
        type: ObjectId,
        ref: 'Task'
    }]
})

const User = mongoose.model('User', userSchema)

module.exports = User