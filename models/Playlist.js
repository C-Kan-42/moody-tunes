const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlaylistSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    songIds: {
        type: Array,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Playlists = mongoose.model("Playlist", PlaylistSchema);