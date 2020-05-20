const mongoose = require('mongoose');

const GatewaynodeSchema = new mongoose.Schema({
    _nodeId: {
        type: mongoose.Types.ObjectId
    },
    ordders: {
        type: Boolean,
        required: true,
        minlength: 1,
        trim: true
    },
    address: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    time: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }

})

const Gatewaynode = mongoose.model('Gatewaynode', GatewaynodeSchema);

module.exports = { Gatewaynode }