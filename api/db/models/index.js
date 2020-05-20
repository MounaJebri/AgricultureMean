
const { User } = require('./user.model');
const { Node } = require('./node.model');
const { Sensornode } = require('./sensornode.model');
const { Tanknode } = require('./tanknode.model');
const { Gatewaynode } = require('./gatewaynode.model');


module.exports = {
    User,
    Node,
    Tanknode,
    Sensornode,
    Gatewaynode
}