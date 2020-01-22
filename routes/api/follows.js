const express = require("express");
const router = express.Router();
const Follow = require("../../models/Follow");
const bcrypt = require("bcryptjs");
const keys = require("../../config/keys");
const jwt = require("jsonwebtoken");
const passport = require("passport");

router.get('/', (req, res) => {
    Follow.find()
        .sort({ date: -1 })
        .then(playlists => res.json(playlists))
        .catch(err => res.status(404).json({ noplaylistsfound: 'No playlists found' }));
});

// router.post('/', (req, res) => {
//     Follow.
// });

// router.delete('/:playlistId', (req, res) => {
//     Follow.find()
// });

module.exports = router;