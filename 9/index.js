// const fs = require('fs')
// fs.writeFile('async-file', "Hello World", {}, (error) => {
//     console.log(error === null ? "Success" : "Error")
// })
// const http = require('http')

// const server = http.createServer((req, res) => {
//     console.log(req.url)

//     res.write("<h1>Hello World</h1>")
//     res.write("<h1>Hello World2</h1>")
//     res.end()
// })

// server.listen(8888)
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const {router: productRouter} = require('./routes/product')

app.use(bodyParser.json())

app.use('/product', productRouter)

app.use('/', (req, res) => {
    res.send({success: true, products: []})
})

app.listen(8888)