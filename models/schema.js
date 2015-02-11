var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var playerSchema = new Schema({
    name: String,
    team: {type: String, default: "None"},
    channel: String
});

module.exports = mongoose.model('Player', playerSchema);
