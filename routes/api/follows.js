const express = require("express");
const router = express.Router();
const Follow = require("../../models/Follow");
const passport = require("passport");
const jwt = require("jsonwebtoken");

router.get('/', (req, res) => {
    Follow.find()
        .sort({ date: -1 })
        .then(playlists => res.json(playlists))
        .catch(err => res.status(404).json({ noplaylistsfound: 'No playlists found' }));
});

router.post('/', 
    passport.authenticate('jwt', { session: false}),
    (req, res) => { 
        const newFollow = new Follow({
            userId: req.user.id,
            playlistId: req.playlist.id,
            date: Date.now
        });

        newFollow
            .save()
            .then(follow => res.json(follow));
    }
);

router.delete('/:playlistId', (req, res) => {
    Follow.findById(req.params.id)
        .then(playlists => res.json(playlists))
        .catch(err => 
            res.status(404).json({ noplaylistfound: "Playlist was not unfollowed" })
        );
});

module.exports = router;