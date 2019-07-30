const mongoose = require('mongoose');

const Note = mongoose.model('Note', {
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    description: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    deleted: {
        type: Boolean,
        default: false
    },
    updatedAt: {
        type: Number,
        default: null
    },
    _creator: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    }
})

module.exports = {Note}
