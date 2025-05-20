const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const taskRouter = require('./routes/task')

app.use(bodyParser.json())

app.use('/task', taskRouter)

app.use((error, req, res, next) => {
    res.status(500).send({success: false, error: error.message})
})

app.listen(8888)