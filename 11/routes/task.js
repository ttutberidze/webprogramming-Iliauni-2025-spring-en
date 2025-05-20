const express = require('express')
const taskController = require('../controllers/task')

const router = express.Router()

router
    .get('/', taskController.find)
    .post('/', taskController.create)

module.exports = router;