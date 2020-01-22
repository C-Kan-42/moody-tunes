const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReactionSchema = new Schema({
    userId: {
        type: Number,
        required: true
    },
    playlistId: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Reaction = mongoose.model('Reaction', ReactionSchema)