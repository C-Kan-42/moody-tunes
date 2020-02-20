const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReactionSchema = new Schema({
    mood: {
        type: String,
        required: true
    },
    unicode: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Reaction = mongoose.model('Reaction', ReactionSchema)