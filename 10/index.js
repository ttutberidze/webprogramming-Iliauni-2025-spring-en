const mongoose = require('mongoose');
const User = require('./models/user');
const Task = require('./models/task');

const createTask = async (doc) => {
    const task = new Task(doc)
    return await task.save()
}

const assignTask = async (userId, taskId) => {
    return await User.findByIdAndUpdate(userId, {$push: {tasks: taskId}})
}

const createUser = async () => {
    const user = new User({name: 'James Bond', address: {city: "NY"}, skills: ['Fighting', "Shooting"]})
    return await user.save()
}

const main = async () => {
    await mongoose.connect('mongodb+srv://iliauni:iliauni@cluster0.2xzq5jw.mongodb.net/task-management?retryWrites=true&w=majority&appName=Cluster0')
    const task = await createTask({title: 'Go Shopping', isDone: true})
    const user = await assignTask('6822df47f4143f0a7f8531e0', task._id)
    
    console.log(await User.findById('6822df47f4143f0a7f8531e0').populate('tasks'))
}

main()