const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SongSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        reqiured: true
    },
    spotifyId: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Song = mongoose.model('songs', SongSchema);
module.exports = Song;