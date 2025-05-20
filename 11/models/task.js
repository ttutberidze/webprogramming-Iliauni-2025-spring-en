const mongoose = require('mongoose');
const slugify = require('slugify')

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is mandatory'],
        minLength: [4, 'Write longer title']
    },
    slug: {
        type: String,
        required: false
    },
    estimation: {
        type: Number,
        required: false
    },
    priority: {
        type: String,
        required: true,
        enum: {
            values: ['low', 'medium', 'high'],
            message: 'Wrong'
        },
        default: 'medium'
    },
    isPrivate: {
        type: Boolean,
        default: false
    },
    isDone: Boolean
}, {
    toJSON: {virtuals: true},
    toObject: {virtuals: true}
})

taskSchema.virtual('daysEstimated').get(function() {
    return (this.estimation || 0) / 8
})

taskSchema.pre('save', function(next) {
    this.slug = slugify(this.title)
    this.startedAt = Date.now()
    next()
})

taskSchema.post('save', function(doc, next) {
    console.log('Insertion took ' + (Date.now() - doc.startedAt))
    next()
})

taskSchema.pre('find', function(next) {
    this.find({isPrivate: {$ne: true}})
    next()
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task