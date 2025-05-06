const express = require('express')
const router = express.Router()


router.get('/:id', (req, res) => {
    const params = req.params
    res.send(params)
})

router.get('/', (req, res) => {
    const query = req.query
    res.send(query)
})

router.post('/', (req, res) => {
    const body = req.body
    console.log(body)
    res.send(body)
})

router.put('/', (req, res) => {
    res.send('Updated')
})

module.exports = {router}

// GET, POST, PUT, PATCH, DELETE