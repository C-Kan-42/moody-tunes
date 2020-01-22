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

module.exports = router;