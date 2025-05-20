const Task = require("../models/task")

const find = async (req, res) => {
    const tasks = await Task.find(req.query)
    res.send(tasks)
}

const create = async (req, res) => {
    const createdTask =  await Task.create(req.body)
    res.send(createdTask)
}

module.exports = {find, create}