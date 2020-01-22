const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FollowSchema = new Schema({
    userId: {
        type: Number,
        required: true
    },
    playlistId: {
        type: Number,
        reqiured: true
    },
    date: {
        type: Date,
        required: Date.now
    }
});

const Follow = mongoose.model('follows', FollowSchema);
module.exports = Follow;