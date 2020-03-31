const express = require("express");
const router = express.Router();
// const mongoose = require("mongoose");
// const passport = require("passport");

const Playlist = require("../../models/Playlist");
// const Song = require("../../models/Song");

router.get("/", (req, res) => {
    Playlist.find()
        .populate("songs")
        .sort({ reaction: -1 }) // DOUBLE CHECK IF THIS SORTS BY HIGHEST -> LOWEST
        .then(playlists => res.json(playlists))
        .catch(err => res.status(404).json({ noplaylistsfound: "No playlists found" })
        );
});

router.get('/:playlistId', (req, res) => {
    Playlist.findById(req.params.playlistId)
        .populate("songs")
        .then(playlist => res.json(playlist))
        .catch(err =>
            res.status(404).json({ noplaylistfound: "No playlist found with that ID" })
        );
});

// To test/seed on Postman, creating playlist
router.post("/", (req, res) => {
    const newPlaylist = new Playlist({
        title: req.body.title,
        songs: req.body.songs,
        reactionIds: req.body.reactionIds,
        spotifyId: req.body.spotifyId,
        date: req.body.date
    });
    newPlaylist
        .save()
        .then(playlist => res.json(playlist))
        .catch(err => res.status(400).json({ noplaylistfound: "No playlist found with that ID "}))
})

//To update reaction count
router.patch('/:playlistId', (req, res, next) => {
    var action = req.body.reaction;
    const counter = action ? 1 : -1;
    var field = {};
    field[`reactions.${action}`] = counter;    
    
    Playlist.updateOne({ _id: req.body.id}, { $inc: field })
        // .then(res => {res.status(200).json({message: 'reacted'});})
        .then(playlist => res.json(playlist))
        .catch(err => res.status(500).json({error: err}));
    
})

module.exports = router;