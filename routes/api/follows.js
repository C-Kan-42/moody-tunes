const express = require("express");
const router = express.Router();
const Follow = require("../../models/Follow");
const passport = require("passport");

router.get('/', (req, res) => {
    Follow.find()
        .sort({ date: -1 })
        .then(playlists => res.json(playlists))
        .catch(err => res.status(404).json({ noplaylistsfound: 'No playlists found' }));
});

router.post('/', (req, res) => { // get back to this
    Follow.findById(req.param.id)
        .then(playlist => res.json(playlist))
        .catch(err => res.status(404).json({ noplaylistfound: "Unable to follow playlist" })
        );
});

router.delete('/:playlistId', (req, res) => {
    Follow.findById(req.params.id)
        .then(playlists => res.json(playlists))
        .catch(err => 
            res.status(404).json({ noplaylistfound: "Playlist was not unfollowed" })
        );
});

module.exports = router;