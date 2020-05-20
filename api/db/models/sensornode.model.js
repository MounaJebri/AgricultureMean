const mongoose = require('mongoose');

const SensornodeSchema = new mongoose.Schema({

    _nodeId: {
        type: mongoose.Types.ObjectId
    },
    Ram: {
        type: Number,
        required: true,
        minlength: 1,
        trim: true
    },
    smoke: {
        type: Number,
        required: true,
        minlength: 1,
        trim: true
    },
    temperature: {
        type: Number,
        required: true,
        minlength: 1,
        trim: true
    },
    humidity: {
        type: Number,
        required: true,
        minlength: 1,
        trim: true
    },
    moisture: {
        type: Number,
        required: true,
        minlength: 1,
        trim: true
    },
    time: {
        type: String,
        required: true,
    },
    electrovan: {
        type: Boolean,
        required: true,
        minlength: 1,
        trim: true
    }

})

const Sensornode = mongoose.model('Sensornode', SensornodeSchema);

module.exports = { Sensornode }