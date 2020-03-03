const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlaylistSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    songs: [{
        type: Schema.Types.ObjectId,
        ref: "songs",
        required: true
    }],
    reactions: {
        type: Object,
        ref: "reactions"
    },
    spotifyId: { // Added this in
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Playlists = mongoose.model("Playlist", PlaylistSchema);