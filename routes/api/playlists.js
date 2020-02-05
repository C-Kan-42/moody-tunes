const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Playlist = require("../../models/Playlist");

router.get("/", (req, res) => {
    Playlist.find()
        .sort({ reaction: -1 }) // DOUBLE CHECK IF THIS SORTS BY HIGHEST -> LOWEST
        .then(playlists => res.json(playlists))
        .catch(err => res.status(404).json({ noplaylistsfound: "No playlists found" })
        );
});

router.get("/:playlistId", (req, res) => {
    Playlist.findById(req.params.id)
        .then(playlist => res.json(playlist))
        .catch(err =>
            res.status(404).json({ noplaylistfound: "No playlist found with that ID" })
        );
});

// To test/seed on Postman, creating playlist
router.post("/", (req, res) => {
    debugger
    const newPlaylist = new Playlist({
        title: req.body.title,
        songIds: req.body.songIds,
        reactionIds: req.body.reactionIds,
        spotifyId: req.body.spotifyId,
        date: req.body.date
    });
    newPlaylist
        .save()
        .then(playlist => res.json(playlist))
        .catch(err => res.status(400).json({ noplaylistfound: "No playlist made" }))
})

module.exports = router;