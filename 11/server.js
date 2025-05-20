const mongoose = require('mongoose');
const app = require('./app')

mongoose.connect('mongodb+srv://iliauni:iliauni@cluster0.2xzq5jw.mongodb.net/task-management?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log('Connected to MongoDB')
    })
