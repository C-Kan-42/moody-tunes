const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FollowSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    playlistId: {
        type: Schema.Types.ObjectId,
        ref: 'playlists',
        required: true
    },
    date: {
        type: Date,
        required: Date.now
    }
});

const Follow = mongoose.model('follows', FollowSchema);
module.exports = Follow;